import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
export const RootView = styled.View`
  overflow: hidden;
  position: relative;
  flex: 1;
  background-color: #f0f3f5;
`

export const TitleBar = styled.View`
  position: relative;
  margin-top: 50px;
  padding-left: 80px;
  width: 100%;
`

export const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`

export const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`

export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`

export const Touchable = styled.TouchableOpacity`
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`

export const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  }
})

export const Message = styled.Text``
