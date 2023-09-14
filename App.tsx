import { store } from './src/ui/redux/store';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigation } from './src/ui/navigation/MainStackNavigation';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};