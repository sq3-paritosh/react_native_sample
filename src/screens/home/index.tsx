/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View, useColorScheme} from 'react-native';
import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Section from '../../components/section';
import styles from './home.style';
import DefaultLayout from '../../layouts/defaultLayout';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import Header from '../../components/header';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation}: Props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <DefaultLayout>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
          <Button
            title="Learn More"
            onPress={() => navigation.navigate('LearnMore')}
          />
        </Section>
      </View>
    </DefaultLayout>
  );
}

export default Home;
