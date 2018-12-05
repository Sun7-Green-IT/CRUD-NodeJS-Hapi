import { roleHandler } from '../handler/roleHandler'

export const roleRoute = server => {
  server.route({
    method: 'GET',
    path: '/role',
    config: {
      handler: roleHandler.get
    }
  })
  server.route({
    method: 'POST',
    path: '/role',
    config: {
      handler: roleHandler.add
    }
  })
  server.route({
    method: 'PUT',
    path: '/role/{role_id}',
    config: {
      handler: roleHandler.set
    }
  })
  server.route({
    method: 'delete',
    path: '/role/{role_id}',
    config: {
      handler: roleHandler.remove
    }
  })
}
