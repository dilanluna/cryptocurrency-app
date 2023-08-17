import Coins from './screens/coins';
import queryClient from './query-client';
import { StatusBar } from 'expo-status-bar';
import CoinDetails from './screens/coin-details';
import { RootStackParamList } from './types/navigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Coins"
            component={Coins}
          />
          <Stack.Screen
            name="CoinDetails"
            component={CoinDetails}
            options={{ title: 'Coin Details' }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
