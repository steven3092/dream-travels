import { render, screen } from "@testing-library/react";
import { SearchBar } from "./search-bar";

const handleTripSearchMock = vitest.fn();

vitest.mock("../hooks/use-trips/use-trips", () => ({
  useTrips: () => ({
    handleTripSearch: handleTripSearchMock,
  }),
}));

describe("SearchBar", () => {
  it("should be rendered with a button with correct text", () => {
    render(<SearchBar handleOnTripSearch={handleTripSearchMock} />);
    const searchButtonElement = screen.getByText(/Search/i);
    expect(searchButtonElement).toBeInTheDocument();
  });

  it("should be rendered with correct placeholder", () => {
    render(<SearchBar handleOnTripSearch={handleTripSearchMock} />);
    const searchElement = screen.getByPlaceholderText(/Search trips/i);
    expect(searchElement).toBeInTheDocument();
  });
});
