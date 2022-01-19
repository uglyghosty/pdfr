import firebaseConfig from './config/firebase';
import firebase from '@react-native-firebase/app';
import { initializeApp } from 'firebase/app';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import * as RNPaper from 'react-native-paper';
import theme from './constants/theme';

// firebase.firestore(); // <- needed if using firestore

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  initializeApp(firebaseConfig);
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RNPaper.Provider theme={theme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </RNPaper.Provider>
      </SafeAreaProvider>
    );
  }
}