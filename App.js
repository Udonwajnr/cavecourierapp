import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import SafeAreaViewCss from './src/components/SafeAreaViewCss';
import RegisterScreen from './src/screens/AuthScreens/Register';
import LoginScreen from './src/screens/AuthScreens/LoginScreen';
import ForgotPassword from './src/screens/AuthScreens/ForgotPassword';
import ChangePasswordScreen from './src/screens/AuthScreens/ChangePasswordScreen';
import HomeScreen from './src/screens/AppScreen/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={SafeAreaViewCss.androidSafeArea}>
      <HomeScreen/>
    </SafeAreaView>
  );
}