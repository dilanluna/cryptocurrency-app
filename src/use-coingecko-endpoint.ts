import { useEffect, useState } from 'react';

type State<T> = {
  data: T;
  error: any;
  isLoading: boolean;
};

const initialState: State<undefined> = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

export default function useCoinGeckoEndpoint<T>(
  resource: string,
  fetchOptions?: any,
): State<T> {
  const [state, setState] = useState<State<T>>(initialState);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchFn = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/${resource}`,
        {
          ...fetchOptions,
          signal: abortController.signal,
        },
      );

      if (!response.ok) {
        setState((prevState) => ({
          ...prevState,
          error: new Error(`Invalid Response Status: ${response.status}`),
        }));
        return;
      }

      const data = await response.json();
      setState((prevState) => ({ ...prevState, data }));
    };

    setState((prevState) => ({ ...prevState, isLoading: true }));
    fetchFn().finally(() =>
      setState((prevState) => ({ ...prevState, isLoading: false })),
    );

    return () => abortController.abort();
  }, []);

  return state;
}
