import FetchMock from 'react-native-fetch-mock'
import Mock from 'mockjs'
interface MockProps {
  method: string
  url: string
  params: AnyObject
  urlparams: AnyObject
  headers: AnyObject
}
interface MockConfig {
  [url: string]: (props: MockProps) => any
}
const config: MockConfig = {
  '/api/user': () => {
    const all = Mock.mock({
      'list|2': [
        {
          'id|+1': 1,
          name: '@first @last',
          'age|18-54': 1
        }
      ]
    }).list
    return all
  }
}

if (__DEV__) {
  global.fetch = new FetchMock(config, {
    delay: 200, // 200ms
    fetch: global.fetch
  }).fetch
}
