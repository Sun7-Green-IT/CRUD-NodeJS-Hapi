import { userHandler } from '../handler/userHandler'

export const userRoute = server => {
  server.route({
    method: 'GET',
    path: '/users',
    config: {
      handler: userHandler.get
    }
  })
  server.route({
    method: 'POST',
    path: '/users',
    config: {
      handler: userHandler.add
    }
  })
  server.route({
    method: 'PUT',
    path: '/users/{user_id}',
    config: {
      handler: userHandler.set
    }
  })
  server.route({
    method: 'delete',
    path: '/users/{user_id}',
    config: {
      handler: userHandler.remove
    }
  })
}
