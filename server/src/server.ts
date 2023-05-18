import 'dotenv/config'

import fastify from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()
const port = 3333

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'timecapsule',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Http server running on port ${port}`)
  })
