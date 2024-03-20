import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ChatScreen from './pages/ChatScreen';
import Splash from './pages/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from './pages/Detail';
import AnimateExample from './pages/AnimateExample';
import BasicCalendar from './pages/BasicCalendar';
import BasicCarousel from './pages/BasicCarousel';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import CustomCameraRoll from './components/CustomCameraRoll';
import VideoPlayer from './pages/VideoPlayer';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="BasicCalendar" component={BasicCalendar} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="VideoPlayer" component={VideoPlayer} />
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
      <Stack.Screen name="Notice" component={Notice} />
      <Stack.Screen name="NoticeDetail" component={NoticeDetail} />
      <Stack.Screen name="CustomCameraRoll" component={CustomCameraRoll} />
    </Stack.Navigator>
  );
};

export default Router;
