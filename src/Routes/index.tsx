import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AuthRoutes } from './auth.routes';

export function Routes(){

  return(
    <NavigationContainer>
       <StatusBar style='dark' />

        <AuthRoutes/>

    </NavigationContainer>
  )
}