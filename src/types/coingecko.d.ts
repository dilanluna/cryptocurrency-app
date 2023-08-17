type CoinMarket = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
};

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: {
    small: string;
  };
  market_data: {
    current_price: Record<string, number>;
    market_cap: Record<string, number>;
    total_volume: Record<string, number>;
    price_change_percentage_1h_in_currency: Record<string, number>;
    circulating_supply: number;
  };
};
