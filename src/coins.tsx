import CoinList from './coin-list';
import { useEffect, useState } from 'react';
import { CoinsScreenProps } from './types/navigation';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from 'react-native';

export default function Coins({ navigation }: CoinsScreenProps) {
  const [searchText, setSearchText] = useState<string>();

  const handleChangeText = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    console.log(e.nativeEvent.text);
  };

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
