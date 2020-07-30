import styled from 'styled-components/native'
export const Container = styled.View`
  background-color: #fff;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

export const Cover = styled.View`
  position: relative;
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const Title = styled.Text`
  margin: 20px 0 0 20px;
  width: 170px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`

export const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`

export const Wrapper = styled.View`
  margin-left: 10px;
`

export const Logo = styled.Image`
  width: 44px;
  height: 44px;
`

export const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`

export const Subtitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 4px;
`
