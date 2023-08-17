import Spinner from './spinner';
import { useCoins } from '../crypto-api';
import { RootStackNavation } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import { formatCurrency, formatPercet } from '../number-format';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

function Separator() {
  return <View style={{ height: 12 }} />;
}

function CoinItem({ coin }: { coin: CoinMarket }) {
  const { navigate } = useNavigation<RootStackNavation>();

  return (
    <Pressable
      onPress={() => navigate('CoinDetails', { coinId: coin.id })}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
        elevation: 3,
      }}>
      <View style={{ justifyContent: 'center', paddingEnd: 8 }}>
        <Image
          source={{ uri: coin.image }}
          style={{ height: 25, width: 25 }}
        />
      </View>

      <View style={{ flexGrow: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>{coin.name}</Text>
          <Text> ({coin.symbol.toUpperCase()})</Text>
        </View>
      </View>

      <View>
        <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
          {formatCurrency(coin.current_price)}
        </Text>
        <Text
          style={{
            textAlign: 'right',
            color:
              coin.price_change_percentage_1h_in_currency < 0 ? 'red' : 'lime',
          }}>
          {formatPercet(coin.price_change_percentage_1h_in_currency)}
        </Text>
      </View>
    </Pressable>
  );
}

export default function CoinList() {
  const { data, refetch, isFetching, isLoading, fetchNextPage } = useCoins();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <FlatList
      onRefresh={refetch}
      refreshing={isFetching}
      data={data.pages.flat()}
      ItemSeparatorComponent={Separator}
      onEndReached={() => fetchNextPage()}
      contentContainerStyle={{ paddingBottom: 24 }}
      renderItem={({ item }) => <CoinItem coin={item} />}
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 14,
      }}
    />
  );
}
