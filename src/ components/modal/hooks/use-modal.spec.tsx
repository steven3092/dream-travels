import { act, renderHook } from "@testing-library/react";
import { useModal } from "./use-modal";

describe("useModal", () => {
  it("should change the isOpen value", () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.toggleStatus();
    });

    expect(result.current.isOpen).toBeTruthy();
  });
});
