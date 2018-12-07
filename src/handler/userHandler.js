import { database, executeSql } from '../utils/postgres'
import { recover } from '../utils/recover'

export const userHandler = {
  get: (request, h) => {
    const reply = recover(
      executeSql(database, 'SELECT * FROM public.user', []),
      res => res.rows,
      err => err
    )
    return reply
  }
}
