import { StatusBar } from 'expo-status-bar';
import { MainNavigator } from './navigation/MainNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <MainNavigator />
    </>
  );
}

