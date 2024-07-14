import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ButtonGroup } from "./button-group";
// import { useTrips } from "../../hooks/use-trips/use-trips";

const mockState = [
  { id: 1, title: "Trip to Lisbon", description: "A beautiful trip to Lisbon" },
  { id: 2, title: "Trip to Sintra", description: "A wonderful trip to Sintra" },
];

vi.mock("../../hooks/use-trips/use-trips", () => ({
  useTrips: () => ({
    state: mockState,
  }),
}));

const mockProps = {
  leftButton: "All Trips",
  middleButton: "Upcoming Trips",
  rightButton: "Completed Trips",
  handleOnClickAllTrips: vi.fn(),
  handleOnClickUpcomingTrips: vi.fn(),
  handleOnClickCompletedTrips: vi.fn(),
};
describe("ButtonGroup", () => {
  it("should render the ButtonGroup component", () => {
    render(<ButtonGroup {...mockProps} />);

    const leftButton = screen.getByRole("button", {
      name: mockProps.leftButton,
    });
    const middleButton = screen.getByRole("button", {
      name: mockProps.middleButton,
    });
    const rightButton = screen.getByRole("button", {
      name: mockProps.rightButton,
    });

    expect(leftButton).toBeInTheDocument();
    expect(middleButton).toBeInTheDocument();
    expect(rightButton).toBeInTheDocument();
  });

  it("should call handleOnClickAllTrips when the left button is clicked", async () => {
    render(<ButtonGroup {...mockProps} />);

    const leftButton = screen.getByRole("button", {
      name: mockProps.leftButton,
    });
    await userEvent.click(leftButton);

    expect(mockProps.handleOnClickAllTrips).toHaveBeenCalledWith(mockState);
  });

  it("should call handleOnClickUpcomingTrips when the middle button is clicked", async () => {
    render(<ButtonGroup {...mockProps} />);

    const middleButton = screen.getByRole("button", {
      name: mockProps.middleButton,
    });
    await userEvent.click(middleButton);

    expect(mockProps.handleOnClickUpcomingTrips).toHaveBeenCalled();
  });

  it("should call handleOnClickCompletedTrips when the right button is clicked", async () => {
    render(<ButtonGroup {...mockProps} />);

    const rightButton = screen.getByRole("button", {
      name: mockProps.rightButton,
    });
    await userEvent.click(rightButton);

    expect(mockProps.handleOnClickCompletedTrips).toHaveBeenCalledWith(
      "completed"
    );
  });
});
