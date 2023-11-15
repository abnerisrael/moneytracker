import { createStackNavigator } from '@react-navigation/stack';
import { WhatScreenView } from '../screens/register/WhatScreenView';
import { HowMuchScreenView } from '../screens/register/HowMuchScreenView';
import { WhereScreenView } from '../screens/register/WhereScreenView';
import { AsScreenView } from '../screens/register/AsScreenView';
import { WhenScreenView } from '../screens/register/WhenScreenView';
import SaveDataScreenView from '../screens/register/SaveDataScreenView';

const Stack = createStackNavigator();

export function RegisterStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="what" component={WhatScreenView} />
        <Stack.Screen name="howmuch" component={HowMuchScreenView}/>
        <Stack.Screen name="where" component={WhereScreenView} />
        <Stack.Screen name="when" component={WhenScreenView} />
        <Stack.Screen name="as" component={AsScreenView} />
        <Stack.Screen name="save" component={SaveDataScreenView} />
      </Stack.Group>
    </Stack.Navigator>
  );
}