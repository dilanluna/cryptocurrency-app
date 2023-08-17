import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Coins: undefined;
  CoinDetails: { coinId: string };
};

type RootStackNavation = NavigationProp<RootStackParamList>;

type CoinsScreenProps = NativeStackScreenProps<RootStackParamList, 'Coins'>;

type CoinDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CoinDetails'
>;
