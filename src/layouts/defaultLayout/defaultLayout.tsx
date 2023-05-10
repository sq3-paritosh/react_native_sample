/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ScrollView, StatusBar, StyleSheet, useColorScheme} from 'react-native';

const DefaultLayout = ({children}: PropsWithChildren): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const style = StyleSheet.create({
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  });
  return (
    <SafeAreaView style={style}>
      <ScrollView style={style} contentInsetAdjustmentBehavior="automatic">
        <StatusBar />
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultLayout;
