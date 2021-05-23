import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import SummaryScreen from './components/SummaryScreen'


export default function App() {
  
  return (
    <View>
       <AppContainer/>
    </View>
  );
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen  
})

const AppContainer = createAppContainer(AppNavigator)
    

const styles = StyleSheet.create({
  
});
