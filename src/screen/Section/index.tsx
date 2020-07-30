import React, { useEffect } from 'react'
import {
  Container,
  Cover,
  Image,
  Title,
  Caption,
  CloseView,
  Wrapper,
  Logo,
  Subtitle,
  Content,
  ScrollContainer,
  PlayWrapper,
  PlayView
} from './styled'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar, Linking } from 'react-native'
import Markdown from 'react-native-showdown'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PlayIcon } from '@/components/Icons'

function Section() {
  const navigation = useNavigation()
  const route = useRoute()

  const section = (route.params as AnyObject)?.section

  // useEffect(() => {
  //   StatusBar.setHidden(true)
  //   return () => {
  //     StatusBar.setHidden(false)
  //   }
  // }, [])

  return (
    <>
      <ScrollContainer>
        <Container>
          <Cover>
            <Image source={{ uri: section.image.url }} />
            <PlayWrapper>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Video')
                }}
              >
                <PlayView>
                  <PlayIcon style={{ marginLeft: -10 }} />
                </PlayView>
              </TouchableOpacity>
            </PlayWrapper>
            <Wrapper>
              <Logo source={section.logo.rul} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>
            <Title>{section.title}</Title>
            <Caption>{section.caption}</Caption>
            <CloseView onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-close"
                size={36}
                color="#4775f2"
                style={{ marginTop: -2 }}
              />
            </CloseView>
          </Cover>
          <Content>
            <Markdown
              markdown={section.content}
              css={htmlStyles}
              scalesPageToFit={false}
              scrollEnabled={true}
              onNavigationStateChange={(event: any) => {
                if (event.url != 'about:blank') {
                  Linking.openURL(event.url)
                }
              }}
            />
          </Content>
        </Container>
      </ScrollContainer>
      <StatusBar hidden />
    </>
  )
}

export default Section

const htmlStyles = `
    * {
      font-family: -apple-system, Roboto;
      margin: 0;
      padding: 0;
      font-size: 17px;
      font-weight: normal;
      color: #3c4560;
      line-height: 24px;
    }
    h2 {
      font-size: 20px;
      text-transform: uppercase;
      color: #b8bece;
      font-weight: 600;
      margin-top: 50px;
    }
  
    p {
      margin-top: 20px;
    }
  
    a {
      color: #4775f2;
      font-weight: 600;
      text-decoration: none;
    }
  
    strong {
      font-weight: 700;
    }
    img {
      width: 100%;
      border-radius: 10px;
      margin-top: 20px;
    }
    pre {
      padding: 20px;
      background: #212C4F;
      overflow: hidden;
      word-wrap: break-word;
      border-radius: 10px;
      margin-top: 20px;
    }
    
    code {
      color: white;
    }
`
