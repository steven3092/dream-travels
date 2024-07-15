import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TripModal } from "./trip-modal";

vi.mock("./trip-modal-itinerary/hooks/use-trip-modal", () => ({
  useTripModalItinerary: () => ({
    itineraryModal: [],
    handleOnClickAddItinerary: vi.fn(),
  }),
}));

const mockOnSubmit = vi.fn();

describe("TripModal", () => {
  it("should render TripModal component", () => {
    render(<TripModal onSubmit={mockOnSubmit} />);

    expect(screen.getByText("Create a trip")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Save/i })).toBeInTheDocument();
  });

  it("should call onSubmit with correct data when form is submitted", async () => {
    render(<TripModal onSubmit={mockOnSubmit} />);

    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText("Italy"), "Test Trip");

    await user.click(screen.getByRole("button", { name: /Save/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      id: 7,
      itinerary: [
        {
          day: "1",
          description: "",
          location: "",
        },
      ],
      description: "",
      photo_url: "",
      status: "todo",
      title: "Test Trip",
    });
  });
});
