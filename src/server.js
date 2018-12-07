import { Server } from 'hapi'
import { config } from './utils/config'

import { roleRoute } from './route/roleRoute'
import { userRoute } from './route/userRoute'
import { fibonnaciRoute } from './route/fibonnaciRoute'

import { recursive_fibonnaci } from './utils/fibonnaci'

export default function start() {
  const server = new Server({
    host: config.hapi.host,
    port: config.hapi.port,
    routes: { cors: { origin: ['*'] } }
  })

  server.start().then(
    res => console.log('Server listening on', server.info.uri),
    err => {
      console.error(err)
    }
  )

  roleRoute(server)
  userRoute(server)
  fibonnaciRoute(server)

  return server
}
