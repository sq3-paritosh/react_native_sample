/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home';
import LearnMore from './screens/LearnMore';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'My Home Component'}}
        />
        <Stack.Screen
          name="LearnMore"
          component={LearnMore}
          options={{title: 'Learn More about React Native'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
