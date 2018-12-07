import { fibonnaciHandler } from '../handler/fibonnaciHandler'

export const fibonnaciRoute = server => {
  server.route({
    method: 'GET',
    path: '/fibonnaci/{number}',
    config: {
      handler: fibonnaciHandler.get
    }
  })
}
