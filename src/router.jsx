import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ChatScreen from './pages/ChatScreen';
import Splash from './pages/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from './pages/Detail';
import AnimateExample from './pages/AnimateExample';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Animated" component={AnimateExample} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Router;
