import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react'

import { Home } from '../screens/Home';
import { About } from '../screens/About';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="home" component={Home} />
    <Screen name="about" component={About} />
  </Navigator>
}