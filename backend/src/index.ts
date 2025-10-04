import { cors } from '@elysiajs/cors'
import { Elysia } from 'elysia'

import { betterAuthPlugin } from './lib/auth.js'

const app = new Elysia()
  .use(
    cors({
      credentials: true,
    }),
  )
  .get('/', () => 'Hello Elysia')
  .use(betterAuthPlugin)
  .get(
    '/auth-test',
    ({ user }) => {
      return user.email
    },
    {
      auth: true,
    },
  )
  .listen(parseInt(process.env.PORT || '5001', 10))

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
