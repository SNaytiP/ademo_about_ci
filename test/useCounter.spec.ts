import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useCounter from "../src/hooks/features/homepage/useCounter";

describe("useCounter hook", () => {
  it("returns initial count as 0 and val as 1", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toEqual(0);
    expect(result.current.val).toEqual(1);
  });

  it("increments count by val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.count).toEqual(1);
  });

  it("updates val and increments count accordingly", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.setVal(4));
    act(() => result.current.increment());
    expect(result.current.count).toEqual(4);
  });

  it("increments count multiple times with custom val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.setVal(2));
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toEqual(6); // 2 + 2 + 2
  });

  it("handles decrementing with negative val", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.setVal(-3));
    act(() => result.current.increment());
    expect(result.current.count).toEqual(-3);
  });
});