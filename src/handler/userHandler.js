import { database, executeSql } from '../utils/postgres'
import { recover } from '../utils/recover'
import uuidv4 from 'uuid/v4'
import Boom from 'boom'

export const userHandler = {
  get: (request, h) => {
    const reply = recover(
      executeSql(database, 'SELECT * FROM user', []),
      res => res,
      err => {
        return Boom.badRequest(err)
      }
    )
    return reply
  },
  add: (request, h) => {
    const { show_id, minutes, seconds } = request.payload

    const reply = recover(
      executeSql(
        database,
        'INSERT INTO user (user_id, show_id, minutes, seconds, createdAt) VALUES (?, ?, ?, ?, ?);',
        [uuidv4(), show_id, minutes, seconds, moment().format()]
      ),
      res => {
        recover(
          executeSql(
            database,
            'UPDATE show SET updatedAt = ? WHERE show_id = ?;',
            [moment().format(), show_id]
          ),
          res => res,
          err => {
            return Boom.badData(err)
          }
        )
        return res
      },
      err => {
        return Boom.conflict(err)
      }
    )

    return reply
  },
  set: (request, h) => {
    const { show_id, minutes, seconds } = request.payload
    const { user_id } = request.params

    const reply = recover(
      executeSql(
        database,
        'UPDATE user SET show_id = ?, minutes = ?, seconds = ?, updatedAt = ? WHERE user_id = ?;',
        [show_id, minutes, seconds, moment().format(), user_id]
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
        'SELECT show_id FROM user WHERE user_id = ?;',
        user_id
      ),
      res => {
        const show_id = res[0].show_id
        return recover(
          executeSql(database, 'DELETE FROM user WHERE user_id = ?;', user_id),
          res => {
            recover(
              executeSql(
                database,
                'UPDATE show SET updatedAt = ? WHERE show_id = ?;',
                [moment().format(), show_id]
              ),
              res => res,
              err => {
                return Boom.badData(err)
              }
            )
            return res
          },
          err => {
            return Boom.badRequest(err)
          }
        )
      },
      err => {
        return Boom.badRequest(err)
      }
    )

    return reply
  }
}
