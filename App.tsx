import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './assets/screens/Splash';
import Register from './assets/screens/Register';
import ManHinh from './assets/screens/BottomTab/ManHinh';
import ChiTietSP from './assets/screens/ChiTietSP';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManHinh"
          component={ManHinh}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChiTietSP"
          component={ChiTietSP}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
