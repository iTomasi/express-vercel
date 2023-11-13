import express from 'express'

const app = express()

app.set('port', Number(process.env.PORT) || 4000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.json({
    message: 'Api On'
  })
})

export { app }
