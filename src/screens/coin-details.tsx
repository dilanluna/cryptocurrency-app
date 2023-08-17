import Spinner from '../components/spinner';
import { useCoinById } from '../crypto-api';
import { Image, Text, View } from 'react-native';
import { CoinDetailsScreenProps } from '../types/navigation';
import { formatCurrency, formatInteger, formatPercet } from '../number-format';

export default function CoinDetails({ route }: CoinDetailsScreenProps) {
  // @ts-expect-error: false posibly undefined `route.params`
  const { data: coin, isLoading } = useCoinById(route.params.coinId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 18,
          borderRadius: 10,
          elevation: 3,
        }}>
        <View style={{ flexDirection: 'row', paddingBottom: 16 }}>
          <View style={{ justifyContent: 'center', paddingEnd: 8 }}>
            <Image
              style={{ height: 32, width: 32 }}
              source={{ uri: coin.image.small }}
            />
          </View>

          <View style={{ flexGrow: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 32 }}>
                {coin.name}
              </Text>
              <Text style={{ color: 'gray', fontSize: 24 }}>
                {' '}
                ({coin.symbol.toUpperCase()})
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingBottom: 16 }}>
          <View style={{ flexGrow: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Price</Text>
            <Text style={{ color: 'gray', fontSize: 16 }}>
              {formatCurrency(coin.market_data.current_price['usd'])}
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>(%)</Text>
            <Text
              style={{
                color:
                  coin.market_data.price_change_percentage_1h_in_currency[
                    'usd'
                  ] < 0
                    ? 'red'
                    : 'lime',
                fontSize: 16,
              }}>
              {formatPercet(
                coin.market_data.price_change_percentage_1h_in_currency['usd'],
              )}
            </Text>
          </View>
        </View>

        <View style={{ paddingBottom: 16 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Market Cap</Text>
          <Text style={{ color: 'gray', fontSize: 16 }}>
            {formatCurrency(coin.market_data.market_cap['usd'])}
          </Text>
        </View>

        <View style={{ paddingBottom: 16 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Volume (24h)</Text>
          <Text style={{ color: 'gray', fontSize: 16 }}>
            {formatCurrency(coin.market_data.total_volume['usd'])}
          </Text>
        </View>

        <View style={{ paddingBottom: 16 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
            Circulating Supply
          </Text>
          <Text style={{ color: 'gray', fontSize: 16 }}>
            {formatInteger(coin.market_data.circulating_supply)}{' '}
            {coin.symbol.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
}
