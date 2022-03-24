import { LogBox, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/Routes';
import { Error } from './src/Screens/Error';

LogBox.ignoreLogs([" Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.","[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"])

export default function App() {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
