import { database, executeSql } from '../utils/postgres'
import { recover } from '../utils/recover'
import uuidv4 from 'uuid/v4'
import Boom from 'boom'

export const userHandler = {
  get: (request, h) => {
    const reply = recover(
      executeSql(database, 'SELECT * FROM public.user', []),
      res => res.rows,
      err => {
        return Boom.badRequest(err)
      }
    )
    return reply
  },
  add: (request, h) => {
    const { firstname, lastname, birthday, email, role_id } = request.payload

    const reply = recover(
      executeSql(
        database,
        'INSERT INTO public.user (firstname, lastname, birthday, email, role_id) VALUES (?, ?, ?, ?, ?);',
        [firstname, lastname, birthday, email, role_id]
      ),
      res => res,
      err => {
        return Boom.conflict(err)
      }
    )

    return reply
  },
  set: (request, h) => {
    const { firstname, lastname, birthday, email, role_id } = request.payload
    const { user_id } = request.params

    const reply = recover(
      executeSql(
        database,
        'UPDATE public.user SET firstname = ?, lastname = ?, birthday = ?, email = ?, role_id = ? WHERE user_id = ?;',
        [firstname, lastname, birthday, email, role_id, user_id]
      ),
      res => res,
      err => {
        return Boom.badRequest(err)
      }
    )

    return reply
  },
  remove: (request, h) => {
    const { user_id } = request.params

    const reply = recover(
      executeSql(
        database,
        'DELETE FROM public.user WHERE user_id = ?;',
        user_id
      ),
      res => res,
      err => {
        return Boom.badRequest(err)
      }
    )

    return reply
  }
}
