import express from 'express'
import scraping from './provider/scraping'

const app = express()
scraping()

app.listen(process.env.PORT, () => {
  console.log('Estamos no ar 🚀')
})
