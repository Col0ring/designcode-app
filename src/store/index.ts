import { create } from 'dva-core-ts'
const app = create()
import homeModel from './models/home'
// const models = require.context('./models/', false, /\.ts$/)
// models.keys().forEach((key) => {
//   const model = models(key).default
//   app.model(model)
// })
app.model(homeModel)
app.start()
export default app._store
