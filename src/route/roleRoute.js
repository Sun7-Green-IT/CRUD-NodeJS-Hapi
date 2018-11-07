import { roleSchema } from '../schema/roleSchema'
import { roleHandler } from '../handler/roleHandler'

export const roleRoute = server => {
  server.route({
    method: 'GET',
    path: '/role',
    config: {
      handler: roleHandler.get,
      description: 'Get roles',
      notes: 'Returns all roles stored in database',
      tags: ['api']
    }
  })
  server.route({
    method: 'POST',
    path: '/role',
    config: {
      handler: roleHandler.add,
      description: 'Add a role',
      notes: 'Add a role in database',
      tags: ['api'],
      validate: { payload: roleSchema }
    }
  })
  server.route({
    method: 'PUT',
    path: '/role/{role_id}',
    config: {
      handler: roleHandler.set,
      description: 'Update a role',
      notes: 'Update a role corresponding to {role_id} in database',
      tags: ['api'],
      validate: { payload: roleSchema }
    }
  })
  server.route({
    method: 'delete',
    path: '/role/{role_id}',
    config: {
      handler: roleHandler.remove,
      description: 'Delete a role',
      notes: 'Delete a role corresponding to {role_id} in database',
      tags: ['api']
    }
  })
}
