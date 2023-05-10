/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  // Button,
  Image,
  // Text,
  View,
  // useColorScheme,
} from 'react-native';
import // Colors,
// DebugInstructions,
// ReloadInstructions,
'react-native/Libraries/NewAppScreen';

// import styles from './login.style';
import DefaultLayout from '../../layouts/defaultLayout';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// import {RootStackParamList} from '../../types';
// type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Login(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <DefaultLayout>
      <View>
        <Image source={require('./images/frame.png')} />
      </View>
    </DefaultLayout>
  );
}

export default Login;
