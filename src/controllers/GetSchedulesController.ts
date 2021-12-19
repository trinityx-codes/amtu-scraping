import { Request, Response } from 'express'

class GetSchedulesController {
  async handle (request: Request, response: Response) {
    console.log('Test')
  }
}

export { GetSchedulesController }
