import { Link, Stack } from 'expo-router'
import { View, Text } from 'react-native'

export default function AboutScreen() {
  return (
    <View className='py-10'>
      <Stack.Screen
        options={{
          title: 'about',
          headerShown: true,
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Text>About screen</Text>
      <Link className='text-red-500' href='/'>
        Home
      </Link>
      <Link className='text-red-500' href='/contact'>
        Contact
      </Link>
    </View>
  )
}
