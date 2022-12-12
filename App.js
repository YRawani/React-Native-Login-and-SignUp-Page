import React, {useEffect, useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import SignUpScreen from './src/pages/SignUpScreen';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const stack= createNativeStackNavigator();

  useEffect(()=>{

  }, [])
  // const name ='Yash'
  return (
   <NavigationContainer>
    <stack.Navigator initialRouteName='Splash'>
      <stack.Screen name='Splash' component={SplashScreen}/>
      <stack.Screen name='SignUp' component={SignUpScreen}/>
      <stack.Screen name='SignIn' component={SignIn}/>
    </stack.Navigator>
   </NavigationContainer>
  )
};


export default App;
