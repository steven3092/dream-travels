import { act, renderHook } from "@testing-library/react";
import { useSearchBar } from "./use-search-bar";
import { ChangeEvent } from "react";

describe("useSearchBar", () => {
  it("should initialize with empty searchQuery", () => {
    const { result } = renderHook(() =>
      useSearchBar({ handleOnTripSearch: vitest.fn() })
    );
    expect(result.current.searchQuery).toBe("");
  });
  it("should update searchQuery on change", () => {
    const { result } = renderHook(() =>
      useSearchBar({ handleOnTripSearch: vitest.fn() })
    );

    act(() => {
      result.current.handleSearchChange({
        target: { value: "lorem ipsum" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.searchQuery).toBe("lorem ipsum");
  });

  it("should call handleOnTripSearch with searchQuery on search click", () => {
    const mockHandleOnTripSearch = vitest.fn();
    const { result } = renderHook(() =>
      useSearchBar({ handleOnTripSearch: mockHandleOnTripSearch })
    );

    act(() => {
      result.current.handleSearchChange({
        target: { value: "lorem ipsum" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleSearchClick();
    });

    expect(mockHandleOnTripSearch).toHaveBeenCalledWith("lorem ipsum");
  });
});
