import React, { useState } from 'react'
import { Image } from './styled'
const Avatar: React.SFC = () => {
  const [photo, setPhoto] = useState(
    'https://cl.ly/55da82beb939/download/avatar-default.jpg'
  )

  return <Image source={{ uri: photo }} />
}

export default Avatar
