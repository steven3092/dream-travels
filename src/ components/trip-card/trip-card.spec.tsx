import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TripCard } from "./trip-card";
import { useModal } from "../modal/hooks/use-modal";

vi.mock("../modal/hooks/use-modal", () => ({
  useModal: vi.fn(),
}));

const mockToggleStatus = vi.fn();

(useModal as vi.Mock).mockReturnValue({
  isOpen: false,
  toggleStatus: mockToggleStatus,
});

const mockProps = {
  photo_url: "some-image-url",
  title: "Sample Trip",
  description: "This is a sample trip description",
  itinerary: [
    { day: "Day 1", description: "Visit Lisbon", location: "Lisbon" },
    { day: "Day 2", description: "Explore Sintra", location: "Sintra" },
  ],
  id: 1,
  status: "todo" as "todo",
  handleOnTripChangeStatus: vi.fn(),
  handleOnTripEditSubmit: vi.fn(),
  handleOnDeleteTrip: vi.fn(),
};

describe("TripCard", () => {
  it("should render the TripCard component", () => {
    render(<TripCard {...mockProps} />);

    const imageElement = screen.getByAltText("no image");
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(mockProps.description);
    expect(descriptionElement).toBeInTheDocument();

    const detailButton = screen.getByRole("button", {
      name: /See trips detail/i,
    });
    const editButton = screen.getByRole("button", { name: /Edit/i });
    const deleteButton = screen.getByRole("button", { name: /Delete/i });

    expect(detailButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it("should open and close the detail modal when the detail button is clicked", async () => {
    render(<TripCard {...mockProps} />);

    const detailButton = screen.getByRole("button", {
      name: /See trips detail/i,
    });
    await userEvent.click(detailButton);

    expect(mockToggleStatus).toHaveBeenCalled();
  });

  it("should open and close the edit modal when the edit button is clicked", async () => {
    render(<TripCard {...mockProps} />);

    const editButton = screen.getByRole("button", { name: /Edit/i });
    await userEvent.click(editButton);

    expect(mockToggleStatus).toHaveBeenCalled();
  });

  it("should call handleOnDeleteTrip when the delete button is clicked", async () => {
    render(<TripCard {...mockProps} />);

    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    await userEvent.click(deleteButton);

    expect(mockProps.handleOnDeleteTrip).toHaveBeenCalledWith(mockProps.id);
  });
});
