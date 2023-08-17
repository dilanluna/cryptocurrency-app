import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

async function fetchCoins({ pageParam = 1 }): Promise<CoinMarket[]> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=1h&per_page=10&page=${pageParam}`,
  );

  if (!response.ok) {
    throw new Error(`Invalid Response Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function fetchCoinById(coindId: number): Promise<Coin> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coindId}`,
  );

  if (!response.ok) {
    throw new Error(`Invalid Response Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export const useCoins = () =>
  useInfiniteQuery(['coins'], fetchCoins, {
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

export const useCoinById = (coinId: number) =>
  useQuery(['coins', coinId], () => fetchCoinById(coinId));
