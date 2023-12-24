import { createStackNavigator } from '@react-navigation/stack';
import { TrackerScreenView } from '../screens/tracker/TrackerScreenView';
import LoginScreenView from '../screens/login/LoginScreenView';
import PresentationScreenView from '../screens/presentation/PresentationScreenView';
import { Routes } from './routes';
import { RegisterScreenView } from '../screens/register/RegisterScreenView';
import { Type } from '../../data/interfaces/transaction.i';

export interface RegisterScreenParams { type: Type, scenarie: 'create' | 'update' , _id: string }

export type MainStackParamList = {
  Login: undefined;
  Presentation: undefined;
  Tracker: undefined;
  Register: RegisterScreenParams;
};

const Stack = createStackNavigator<MainStackParamList>();

export function MainStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name={Routes.Guest.login} component={LoginScreenView} />
      <Stack.Screen name={Routes.Authenticated.presentation} component={PresentationScreenView} /> */}
      <Stack.Screen name={'Tracker'} component={TrackerScreenView} />
      <Stack.Screen name={'Register'} component={RegisterScreenView} />
    </Stack.Navigator>
  );
}