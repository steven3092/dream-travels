import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TripModalDetail } from "./trip-modal-detail";
import { TripsDTO } from "../../interfaces/trips.dto.interface";

const mockHandleOnClickTripStatus = vi.fn();
const mockHandleOnSubmitModalDetailForm = vi.fn();

vi.mock("./hooks/use-trip-modal-detail", () => ({
  useTripModalDetail: () => ({
    checked: false,
    handleOnSubmitModalDetailForm: mockHandleOnSubmitModalDetailForm(),
    handleOnClickTripStatus: mockHandleOnClickTripStatus(),
  }),
}));

const mockHandleOnTripChangeStatus = vi.fn();

const mockTrip: TripsDTO = {
  photo_url: "test-url",
  title: "Test Title",
  description: "Test Description",
  itinerary: [
    { day: "1", description: "Test Description", location: "Test Location" },
  ],
  status: "todo",
  id: 1,
};

describe("TripModalDetail", () => {
  it("should render TripModalDetail component", () => {
    render(
      <TripModalDetail
        photo_url={mockTrip.photo_url}
        title={mockTrip.title}
        description={mockTrip.description}
        itinerary={mockTrip.itinerary}
        status={mockTrip.status}
        id={mockTrip.id}
        handleOnTripChangeStatus={mockHandleOnTripChangeStatus}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByAltText("no image")).toHaveAttribute("src", "test-url");
  });

  it("should call handleOnClickTripStatus when checkbox is clicked", async () => {
    render(
      <TripModalDetail
        photo_url={mockTrip.photo_url}
        title={mockTrip.title}
        description={mockTrip.description}
        itinerary={mockTrip.itinerary}
        status={mockTrip.status}
        id={mockTrip.id}
        handleOnTripChangeStatus={mockHandleOnTripChangeStatus}
      />
    );

    const checkboxButton = screen.getByRole("button");
    await userEvent.click(checkboxButton);

    expect(mockHandleOnClickTripStatus).toHaveBeenCalled();
  });

  it("should call handleOnSubmitModalDetailForm when form is submitted", () => {
    render(
      <TripModalDetail
        photo_url={mockTrip.photo_url}
        title={mockTrip.title}
        description={mockTrip.description}
        itinerary={mockTrip.itinerary}
        status={mockTrip.status}
        id={mockTrip.id}
        handleOnTripChangeStatus={mockHandleOnTripChangeStatus}
      />
    );

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockHandleOnSubmitModalDetailForm).toHaveBeenCalled();
  });
});
