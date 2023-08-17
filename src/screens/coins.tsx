import { useEffect, useState } from 'react';
import CoinList from '../coins/coin-list';
import useDebouncedValue from './use-debounce-value';
import { CoinsScreenProps } from '../types/navigation';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from 'react-native';

export default function Coins({ navigation }: CoinsScreenProps) {
  const [query, setQuery] = useState<string>();
  const debouncedQuery = useDebouncedValue(query);

  const handleChangeText = (e: NativeSyntheticEvent<TextInputFocusEventData>) =>
    setQuery(e.nativeEvent.text);

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: handleChangeText,
      },
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <CoinList />
    </View>
  );
}
