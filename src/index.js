import { app } from './app.js'

app.listen(
  app.get('port'),
  () => console.log(`SV ON PORT: ${app.get('port')}`)
)
