import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  KeyboardAvoidingView, Platform, SafeAreaView,
} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <MainNavigator />
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default App;
