import { Router } from 'express'

const router = Router()

router.get('/getSchedules', (request, response) => {
  response.send('Oi gata')
})

export { router }
