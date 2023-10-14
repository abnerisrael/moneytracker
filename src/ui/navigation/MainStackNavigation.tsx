import { createStackNavigator } from '@react-navigation/stack';
import { TrackerScreenView } from '../screens/tracker/TrackerScreenView';
import { RegisterStackNavigation } from './RegisterStackNavigation';
import LoginScreenView from '../screens/login/LoginScreenView';
import PresentationScreenView from '../screens/presentation/PresentationScreenView';
import { Routes } from './routes';

const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name={Routes.Guest.login} component={LoginScreenView} />
      <Stack.Screen name={Routes.Authenticated.presentation} component={PresentationScreenView} />
      <Stack.Screen name={Routes.Authenticated.tracker} component={TrackerScreenView} />
      <Stack.Screen name={Routes.Authenticated.register} component={RegisterStackNavigation} />
    </Stack.Navigator>
  );
}