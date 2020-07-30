import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useRoute, useNavigation } from '@react-navigation/native'
import HomeScreen from '@/screen/Home'
import SectionScreen from '@/screen/Section'
const Stack = createStackNavigator()

const HomeStack: React.FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const state = (route as any).state

  useEffect(() => {
    if (state && state.index > 0) {
      navigation.setOptions({ tabBarVisible: false })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [state])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      mode="modal"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Section" component={SectionScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack
