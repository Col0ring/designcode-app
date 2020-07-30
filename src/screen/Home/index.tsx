import React, { useEffect } from 'react'
import {
  ScrollView,
  SafeAreaView,
  Animated,
  Easing,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { NotificationIcon } from '@/components/Icons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@/components/Card'
import Logo from '@/components/Logo'
import Course from '@/components/Course'
import Menu from '@/components/Menu'
import Avatar from '@/components/Avatar'
import {
  RootView,
  TitleBar,
  Title,
  Touchable,
  Name,
  Subtitle,
  styles,
  CardsContainer,
  Message
} from './styled'

const CardsQuery = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subtitle
        caption
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`
const logos = [
  {
    image: require('@/assets/logo-framerx.png'),
    text: 'Framer X'
  },
  {
    image: require('@/assets/logo-figma.png'),
    text: 'Figma'
  },
  {
    image: require('@/assets/logo-studio.png'),
    text: 'Studio'
  },
  {
    image: require('@/assets/logo-react.png'),
    text: 'React'
  },
  {
    image: require('@/assets/logo-swift.png'),
    text: 'Swift'
  },
  {
    image: require('@/assets/logo-sketch.png'),
    text: 'Sketch'
  }
]
interface Card {
  title: string
  image: any
  caption: string
  content: string
  subtitle: string
  logo: any
}
// const cards = [
//   {
//     title: 'React Native Course',
//     image: require('@/assets/background11.jpg'),
//     caption: '1 of 12 sections',
//     content: '<h1>dsds<h1>',
//     subtitle: 'React Native',
//     logo: require('@/assets/logo-react.png')
//   },
//   {
//     title: 'Styled Components',
//     image: require('@/assets/background12.jpg'),
//     caption: '2 of 12 sections',
//     subtitle: 'React Native',
//     logo: require('@/assets/logo-react.png')
//   },
//   {
//     title: 'Props and Icons',
//     image: require('@/assets/background13.jpg'),
//     caption: '3 of 12 sections',
//     subtitle: 'React Native',
//     logo: require('@/assets/logo-react.png')
//   },
//   {
//     title: 'Static Data and Loop',
//     image: require('@/assets/background14.jpg'),
//     caption: '4 of 12 sections',
//     subtitle: 'React Native',
//     logo: require('@/assets/logo-react.png')
//   }
// ]

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('@/assets/background13.jpg'),
    logo: require('@/assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('@/assets/avatar.jpg'),
    caption: 'Design and interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('@/assets/background11.jpg'),
    logo: require('@/assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('@/assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('@/assets/background14.jpg'),
    logo: require('@/assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('@/assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('@/assets/background6.jpg'),
    logo: require('@/assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('@/assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
]

const scale = new Animated.Value(1)
const opacity = new Animated.Value(1)

const HomeScreen: React.FC = () => {
  const { action } = useSelector(({ home }) => ({ action: home.action }))
  const dispatch = useDispatch()

  const { data, error } = useQuery(CardsQuery)
  const cards: Card[] | null = data?.cardsCollection.items
  const handleOpenMenu = () => {
    dispatch<ModelAction>({
      type: 'home/setAction',
      payload: 'opened'
    })
  }
  const navigation = useNavigation()

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBarStyle('light-content', true)
    } else {
      StatusBar.setBarStyle('dark-content', true)
    }
  }, [])

  useEffect(() => {
    if (action === 'opened') {
      Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: false
      }).start()
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: false
      }).start()
    } else if (action === 'closed') {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in((v) => v),
        useNativeDriver: false
      }).start()
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false
      }).start()
    }
  }, [action])
  return (
    <RootView>
      <Menu />
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ scale }],
            opacity
          }
        ]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <TitleBar>
              <Touchable onPress={handleOpenMenu}>
                <Avatar />
              </Touchable>
              <Title>Welcome back</Title>
              <Name>Col0ring</Name>
              <NotificationIcon
                color="#4775f2"
                style={{ position: 'absolute', right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ padding: 20, paddingLeft: 12, paddingTop: 10 }}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              style={{
                paddingBottom: 30
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <CardsContainer>
                {cards ? (
                  cards.map((card, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        navigation.navigate('Section', {
                          section: card
                        })
                      }
                    >
                      <Card
                        title={card.title}
                        image={card.image.url}
                        caption={card.caption}
                        logo={card.logo.url}
                        subtitle={card.subtitle}
                      />
                    </TouchableOpacity>
                  ))
                ) : (
                  <Message>{error ? 'Loaded Error' : 'Loading...'}</Message>
                )}
              </CardsContainer>
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                title={course.title}
                subtitle={course.subtitle}
                image={course.image}
                logo={course.logo}
                caption={course.caption}
                avatar={course.avatar}
                author={course.author}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
      <StatusBar />
    </RootView>
  )
}

export default HomeScreen
