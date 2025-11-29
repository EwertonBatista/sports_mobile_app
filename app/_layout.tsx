import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuthStore } from '../src/store/authStore';
import "./global.css";

export default function RootLayout() {
  const { user, initialized, checkSession } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (user && inAuthGroup) {
      router.replace('/(tabs)'); 
    } else if (!user && !inAuthGroup) {
      router.replace('/(auth)/login');
    }
  }, [user, initialized, segments]);
  if (!initialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return <Slot />;
}