import { userHandler } from '../handler/userHandler'

export const userRoute = server => {
  server.route({
    method: 'GET',
    path: '/users',
    config: {
      handler: userHandler.get
    }
  })
}
