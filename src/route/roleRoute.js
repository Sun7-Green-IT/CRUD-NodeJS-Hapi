import { roleHandler } from '../handler/roleHandler'

export const roleRoute = server => {
  server.route({
    method: 'GET',
    path: '/roles',
    config: {
      handler: roleHandler.get
    }
  })
}
