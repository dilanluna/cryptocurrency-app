import Spinner from './spinner';
import { View } from 'react-native';
import CoinCard from '../coins/coin-card';
import { useCoinById } from '../coins/coins-api';
import { CoinDetailsScreenProps } from '../types/navigation';

export default function CoinDetails({ route }: CoinDetailsScreenProps) {
  // @ts-expect-error: false posibly undefined `route.params`
  const { data: coin, isLoading } = useCoinById(route.params.coinId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <CoinCard coin={coin} />
    </View>
  );
}
