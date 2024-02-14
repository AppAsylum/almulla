import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ForeignConverterScreen from '../screens/ForeignConverterScreen';
import DetailPaymentScreen from '../screens/DetailPaymentScreen';
import SuccessTransactionScreen from '../screens/SuccessTransactionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
        <Stack.Screen
        name='ForeignConverterScreen'
        component={ForeignConverterScreen}
        ></Stack.Screen>
        <Stack.Screen
        name='DetailPaymentScreen'
        component={DetailPaymentScreen}
        ></Stack.Screen>
        <Stack.Screen
        name='SuccessTransactionScreen'
        component={SuccessTransactionScreen}
        ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})