import React, { useEffect, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { Dimensions, Animated } from 'react-native'
import {
  styles,
  Cover,
  Title,
  Image,
  Subtitle,
  Touchable,
  CloseView,
  Content,
  ButtonMenu,
  ContentScrollView
} from './styled'
import MenuItem from '@/components/MenuItem'
const { height } = Dimensions.get('window')
const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings'
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments'
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course'
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon!'
  }
]

const Menu: React.FC = () => {
  const { action } = useSelector(({ home }) => ({
    action: home.action
  }))
  const dispatch = useDispatch()
  const top = useRef(new Animated.Value(height))
  const handleCloseMenu = () => {
    dispatch<ModelAction>({
      type: 'home/setAction',
      payload: 'closed'
    })
  }
  const handleMenu = (index: number) => {}
  useEffect(() => {
    if (action == 'opened') {
      Animated.spring(top.current, {
        toValue: 54,
        useNativeDriver: false
      }).start()
    } else if (action == 'closed') {
      Animated.spring(top.current, {
        toValue: height,
        useNativeDriver: false
      }).start()
    }
  }, [action])

  return (
    <Animated.View style={[{ top: top.current }, styles.container]}>
      <Cover>
        <Image source={require('@/assets/background2.jpg')} />
        <Title>Daniel Sousa</Title>
        <Subtitle>Designer at LearnCode</Subtitle>
      </Cover>
      <Touchable onPress={handleCloseMenu}>
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </Touchable>
      <ContentScrollView showsVerticalScrollIndicator={false}>
        <Content>
          {items.map((item, index) => (
            <ButtonMenu key={index} onPress={() => handleMenu(index)}>
              <MenuItem title={item.title} text={item.text} icon={item.icon} />
            </ButtonMenu>
          ))}
        </Content>
      </ContentScrollView>
    </Animated.View>
  )
}

export default Menu
