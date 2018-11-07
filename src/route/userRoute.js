import { userSchema } from '../schema/userSchema'
import { userHandler } from '../handler/userHandler'

export const userRoute = server => {
  server.route({
    method: 'GET',
    path: '/user',
    config: {
      handler: userHandler.get,
      description: 'Get users',
      notes: 'Returns all users stored in database',
      tags: ['api']
    }
  })
  server.route({
    method: 'POST',
    path: '/user',
    config: {
      handler: userHandler.add,
      description: 'Add a user',
      notes: 'Add a user in database',
      tags: ['api'],
      validate: { payload: userSchema }
    }
  })
  server.route({
    method: 'PUT',
    path: '/user/{user_id}',
    config: {
      handler: userHandler.set,
      description: 'Update a user',
      notes: 'Update a user corresponding to {user_id} in database',
      tags: ['api'],
      validate: { payload: userSchema }
    }
  })
  server.route({
    method: 'delete',
    path: '/user/{user_id}',
    config: {
      handler: userHandler.remove,
      description: 'Delete a user',
      notes: 'Delete a user corresponding to {user_id} in database',
      tags: ['api']
    }
  })
}
