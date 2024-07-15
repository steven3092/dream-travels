import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useTripModalDetail } from "./use-trip-modal-detail";
import { FormEvent } from "react";

const mockHandleOnTripChangeStatus = vi.fn();

const mockTrip = {
  id: 1,
  photo_url: "some-image-url",
  title: "Trip to Lisbon",
  description: "A beautiful trip to Lisbon",
  status: "todo" as "todo" | "completed",
  itinerary: [
    { day: "Day 1", description: "Visit Lisbon", location: "Lisbon" },
  ],
};

const buildForm = () => {
  const fakeForm = document.createElement("form");
  const statusInput = document.createElement("input");
  statusInput.setAttribute("name", "status");
  statusInput.setAttribute("value", "completed");
  fakeForm.appendChild(statusInput);

  return fakeForm;
};

describe("useTripModalDetail", () => {
  it("should initialize with the correct checked state", () => {
    const { result } = renderHook(() =>
      useTripModalDetail({
        ...mockTrip,
        handleOnTripChangeStatus: mockHandleOnTripChangeStatus,
      })
    );

    expect(result.current.checked).toBe(false);
  });

  it("should toggle the checked state when handleOnClickTripStatus is called", () => {
    const { result } = renderHook(() =>
      useTripModalDetail({
        ...mockTrip,
        handleOnTripChangeStatus: mockHandleOnTripChangeStatus,
      })
    );

    act(() => {
      result.current.handleOnClickTripStatus();
    });

    expect(result.current.checked).toBe(true);

    act(() => {
      result.current.handleOnClickTripStatus();
    });

    expect(result.current.checked).toBe(false);
  });

  it("should call handleOnTripChangeStatus with the updated trip on form submit", () => {
    const { result } = renderHook(() =>
      useTripModalDetail({
        ...mockTrip,
        handleOnTripChangeStatus: mockHandleOnTripChangeStatus,
      })
    );

    const mockFormEvent: Partial<FormEvent<HTMLFormElement>> = {
      preventDefault: vi.fn(),
      target: buildForm(),
    };

    act(() => {
      result.current.handleOnSubmitModalDetailForm(
        mockFormEvent as FormEvent<HTMLFormElement>
      );
    });

    expect(mockHandleOnTripChangeStatus).toHaveBeenCalledWith({
      ...mockTrip,
      status: "completed",
    });
  });
});
