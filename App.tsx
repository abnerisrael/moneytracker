import 'react-native-gesture-handler';
import { store } from './src/ui/redux/store';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigation } from './src/ui/navigation/MainStackNavigation';
import { RealmProvider } from './src/data/database';

export default function App() {
  return (
    <RealmProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </Provider>
    </RealmProvider>
  );
};
