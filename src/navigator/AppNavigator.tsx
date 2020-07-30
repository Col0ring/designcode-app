import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeStack from './HomeStack'
// import ProjectsStack from './ProjectsStack'
// import CoursesStack from './CoursesStack'

const Tab = createBottomTabNavigator()

const TabScreens = [
  {
    name: 'Home',
    title: 'Home',
    component: HomeStack,
    icon: 'ios-home'
  },
  {
    name: 'Course',
    title: 'Course',
    component: HomeStack,
    icon: 'ios-albums'
  },
  {
    name: 'Projects',
    title: 'Projects',
    component: HomeStack,
    icon: 'ios-folder'
  }
]
const activeTintColor = '#4775f2'
const inactiveTintColor = '#ccc'
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor,
          inactiveTintColor
        }}
      >
        {TabScreens.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              title: tab.title,
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name={tab.icon} size={size} color={color} />
              }
            }}
          />
        ))}
        {/* <Tab.Screen
          name="HomeStack"
          component={HomeNavigator}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="ios-home" size={size} color={color} />
            }
          }}
        /> */}
        {/* <Tab.Screen
          name="CoursesStack"
          component={CoursesStack}
          options={{
            title: 'Courses',
            tabBarIcon: ({ color, size, focused }) => {
              return <Ionicons name="ios-albums" size={size} color={color} />
            }
          }}
        />
        <Tab.Screen
          name="ProjectsStack"
          component={ProjectsStack}
          options={{
            title: 'Projects',
            tabBarIcon: ({ color, size, focused }) => {
              return <Ionicons name="ios-folder" size={size} color={color} />
            }
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
