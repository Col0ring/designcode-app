import { HomeModelState } from '@/store/models/home'

declare module 'react-redux' {
  export interface DefaultRootState {
    home: HomeModelState
    [key: string]: any
  }
}
