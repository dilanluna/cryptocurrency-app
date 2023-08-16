import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Coins: undefined;
};

type CoinsScreenProps = NativeStackScreenProps<RootStackParamList, 'Coins'>;
