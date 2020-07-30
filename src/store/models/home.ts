import { Model } from 'dva-core-ts'
import { Reducer } from 'redux'

export interface HomeModelState {
  action: string
  name: string
}

const initialState: HomeModelState = {
  action: 'closed',
  name: ''
}

interface HomeModel extends Model {
  namespace: string
  state: HomeModelState
  reducers: {
    setAction: Reducer<HomeModelState>
  }
  effects: {}
}

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setAction(state, { payload }) {
      return { ...state!, action: payload }
    }
  },
  effects: {}
}

export default homeModel
