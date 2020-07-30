import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Container, Image, Text } from './styled'
interface LogoProps {
  image: ImageSourcePropType
  text: string
}

const Logo: React.FC<LogoProps> = (props) => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
)

export default Logo
