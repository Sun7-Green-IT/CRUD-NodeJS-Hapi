import { database, executeSql } from '../utils/postgres'
import { recover } from '../utils/recover'
import uuidv4 from 'uuid/v4'
import Boom from 'boom'

export const roleHandler = {
  get: (request, h) => {
    const prms = executeSql(database, 'SELECT * FROM public.role', [])

    const reply = recover(
      prms,
      res => res.rows,
      err => {
        return Boom.badRequest(err)
      }
    )

    return reply
  },
  add: (request, h) => {
    const { name } = request.payload

    const prms = (() => {
      return executeSql(
        database,
        'INSERT INTO public.role (name) VALUES (?);',
        [name]
      )
    })()

    const reply = recover(
      prms,
      res => res,
      err => {
        return Boom.conflict(err)
      }
    )

    return reply
  },
  set: (request, h) => {
    const { name } = request.payload
    const { role_id } = request.params

    const prms = executeSql(
      database,
      'UPDATE public.role SET name = ? WHERE role_id = ?;',
      [name, role_id]
    )

    const reply = recover(
      prms,
      res => res,
      err => {
        return Boom.badRequest(err)
      }
    )

    return reply
  },
  remove: (request, h) => {
    const { role_id } = request.params

    const prms = executeSql(
      database,
      'DELETE FROM public.role WHERE role_id = ?;',
      role_id
    )

    const reply = recover(
      prms,
      res => res,
      err => {
        return Boom.badRequest(err)
      }
    )

    return reply
  }
}
