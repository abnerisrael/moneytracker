import { createStackNavigator } from '@react-navigation/stack';
import { TrackerScreenView } from '../screens/tracker/TrackerScreenView';
import { RegisterStackNavigation } from './RegisterStackNavigation';

const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tracker" component={TrackerScreenView} />
      <Stack.Screen name="register" component={RegisterStackNavigation} />
    </Stack.Navigator>
  );
}