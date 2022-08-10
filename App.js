import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Text from './src/components/text/text';
import { useFonts } from 'expo-font';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
  });
  if (!loaded) {
    return (
      <Text>Font is Loaded...</Text>
    );
  }
  return (
    // <View style={styles.container}>
    //   <Text style={{fontFamily: typography.bold, fontSize: spacing[5] }}>Open up App.js to start working on your app!</Text>
    //   <Text preset="h1" style={{ color: 'blue'}}>Open up App.js to start working on your app!</Text>
    //   <Text preset="small" style={{ marginTop: spacing[6]}}>Hello World!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <>
      {/* <NavigationContainer theme={DarkTheme}> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown : false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
