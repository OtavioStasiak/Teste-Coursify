import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Screens/Home';
import { CourseDetails } from '../Screens/CourseDetails';
import { Error } from '../Screens/Error';


const Stack = createStackNavigator();

export function AuthRoutes() {
  return(
    <Stack.Navigator headerMode="none" screenOptions={{cardStyle: {backgroundColor: '#fff'}}} >

       <Stack.Screen name="Home"component={Home}/>

       <Stack.Screen name="CourseDetails" component={CourseDetails} />

       <Stack.Screen name='Error' component={Error} />

    </Stack.Navigator>
  )
}