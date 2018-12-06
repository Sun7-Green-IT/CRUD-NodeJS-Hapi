import { roleHandler } from '../handler/roleHandler'

export const roleRoute = server => {
  server.route({
    method: 'GET',
    path: '/roles',
    config: {
      handler: roleHandler.get
    }
  })
  server.route({
    method: 'POST',
    path: '/roles',
    config: {
      handler: roleHandler.add
    }
  })
  server.route({
    method: 'PUT',
    path: '/roles/{role_id}',
    config: {
      handler: roleHandler.set
    }
  })
  server.route({
    method: 'delete',
    path: '/roles/{role_id}',
    config: {
      handler: roleHandler.remove
    }
  })
}
