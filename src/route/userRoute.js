import { userHandler } from '../handler/userHandler'

export const userRoute = server => {
  server.route({
    method: 'GET',
    path: '/user',
    config: {
      handler: userHandler.get
    }
  })
  server.route({
    method: 'POST',
    path: '/user',
    config: {
      handler: userHandler.add
    }
  })
  server.route({
    method: 'PUT',
    path: '/user/{user_id}',
    config: {
      handler: userHandler.set
    }
  })
  server.route({
    method: 'delete',
    path: '/user/{user_id}',
    config: {
      handler: userHandler.remove
    }
  })
}
