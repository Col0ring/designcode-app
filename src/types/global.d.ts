interface AnyObject<T = any> {
  [prop: string]: T
}

interface ModelAction {
  type: string
  payload: any
}

declare const global: globalThis
