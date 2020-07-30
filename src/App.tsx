import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import { registerRootComponent } from 'expo'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import store from './store'
import AppNavigator from './navigator/AppNavigator'
// import '../mock'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx',
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`
  }
})

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    <StatusBar barStyle="dark-content" />
  </ApolloProvider>
)

export default registerRootComponent(App)
