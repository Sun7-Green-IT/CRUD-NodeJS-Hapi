import { database, executeSql } from '../utils/postgres'
import { recover } from '../utils/recover'

export const roleHandler = {
  get: (request, h) => {
    const prms = executeSql(database, 'SELECT * FROM public.role', [])

    const reply = recover(prms, res => res.rows, err => err)

    return reply
  }
}
