import React from "react";

export interface Results<T> {
  data?: T;
  error?: unknown;
  status?: number;
  isLoading: boolean;
  isLoaded: boolean;
}

/**
 * NOTES: Simple custom hook to extract API logic from components
 * I've been a fan of react-query for a while now in order to separate server state from local state
 */
export function useGetApiResult<T>(url: string) {
  const [state, setState] = React.useState<Results<T>>({
    data: null,
    error: null,
    isLoading: false,
    isLoaded: false,
  });

  React.useEffect(() => {
    fetchResults(url).then();
  }, [url]);

  async function fetchResults(url: string) {
    setState((state) => ({ ...state, isLoading: true }));

    try {
      const respose = await fetch(url);

      if (respose.ok) {
        const result: T = await respose.json();
        setState((state) => ({
          ...state,
          status: respose.status,
          data: result,
          isLoaded: true,
          isLoading: false,
        }));
      } else {
        setState((state) => ({
          ...state,
          status: respose.status,
          error: respose.statusText,
          isLoading: false,
        }));
      }
    } catch (error: unknown) {
      setState((state) => ({
        ...state,
        error: error as Error,
        isLoading: false,
      }));
    }
  }

  return state;
}
