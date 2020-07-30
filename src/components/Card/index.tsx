import React from 'react'
import {
  Container,
  Cover,
  Image,
  Title,
  Content,
  Logo,
  Wrapper,
  Caption,
  Subtitle
} from './styled'

interface CardProps {
  image: string
  title: string
  logo: string
  caption: string
  subtitle: string
}

const Card: React.FC<CardProps> = (props) => (
  <Container style={{ elevation: 10 }}>
    <Cover>
      <Image source={{ uri: props.image }} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={{ uri: props.logo }} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
)

export default Card
