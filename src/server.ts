import express from 'express'

const app = express()

app.listen(process.env.PORT, () => {
  console.log('Estamos no ar 🚀')
})

export { app }
