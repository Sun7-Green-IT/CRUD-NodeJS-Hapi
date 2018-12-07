import env from 'common-env'

export const config = env().getOrElseAll({
  node: {
    env: 'development'
  },
  hapi: {
    host: '127.0.0.1',
    port: 4444
  },
  postgres: {
    user: 'green_it',
    host: '127.0.0.1',
    database: 'green_it',
    password: 'Sun7-Password',
    port: 5432
  }
})
