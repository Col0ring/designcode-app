import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Container, IconView, Content, Title, Text } from './styled'
export interface MenuItemProps {
  icon: string
  title: string
  text: string
}

const MenuItem: React.SFC<MenuItemProps> = (props) => {
  return (
    <Container>
      <IconView>
        <Ionicons name={props.icon} size={24} color="#546bfb" />
      </IconView>
      <Content>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </Content>
    </Container>
  )
}
export default MenuItem
