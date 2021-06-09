import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { theme } from './src/utils/theme';
import Homepage from './src/screens/Homepage/index'

export default function App() {
  return (
    <SafeAreaView style={Colors.lighter}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: Colors.lighter, height: '100%'}}>
          <View style={{backgroundColor: theme.white, width: '80%', padding: 20, marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}>
            <Homepage/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}