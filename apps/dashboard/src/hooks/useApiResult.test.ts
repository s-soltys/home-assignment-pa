import { renderHook, act } from "@testing-library/react-hooks";
import { useGetApiResult } from "./useApiResult";

global.fetch = jest.fn();

describe("useGetApiResult", () => {
  let fetch: jest.Mock;
  const url = "https://api.example.com/data";

  beforeEach(() => {
    fetch = global.fetch as jest.Mock;
    fetch.mockClear();
  });

  it("should set isLoading to true initially", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: "test data" }),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetApiResult(url)
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();
  });

  it("should set data and status on successful fetch", async () => {
    const mockData = { data: "test data" };
    fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockData,
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetApiResult(url)
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.status).toBe(200);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });

  it("should set error and status on failed fetch", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetApiResult(url)
    );

    await waitForNextUpdate();

    expect(result.current.error).toBe("Not Found");
    expect(result.current.status).toBe(404);
    expect(result.current.isLoading).toBe(false);
  });

  it("should set error on fetch exception", async () => {
    const mockError = new Error("Network Error");
    fetch.mockRejectedValueOnce(mockError);

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetApiResult(url)
    );

    await waitForNextUpdate();

    expect(result.current.error).toBe(mockError);
    expect(result.current.isLoading).toBe(false);
  });
});
