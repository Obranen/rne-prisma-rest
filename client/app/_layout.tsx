import { Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { useFontsHook } from '../hooks/useFontsHook'

export default function RootLayout() {
  let { fontsLoaded, fontError, onLayoutRootView } = useFontsHook()

  if (!fontsLoaded && !fontError) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-red-500'>Download...</Text>
      </View>
    )
  }
  return (
    <View className='flex-1' onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
          title: 'Home',
          headerShown: false,
        }}
      />
    </View>
  )
}
