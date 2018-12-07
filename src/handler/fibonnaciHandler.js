import { recursive_fibonnaci } from '../utils/fibonnaci'

export const fibonnaciHandler = {
  get: (request, h) => {
    const number = request.params.number
    const reply = recursive_fibonnaci(number)

    return reply
  }
}
