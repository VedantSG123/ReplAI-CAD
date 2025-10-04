import { betterAuth } from 'better-auth'
import { Elysia } from 'elysia'

import { overrideBaseUrl } from '../utils/overrideBaseUrl'
import { getPool } from './db'
import { sendAuthEmail } from './resend'

export const auth = betterAuth({
  database: getPool(),
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      redirectURI: `${process.env.BACKEND_URL}/api/auth/callback/google`,
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      const modifiedUrl = overrideBaseUrl(
        url,
        process.env.BACKEND_URL as string,
      )
      await sendAuthEmail(user.email, 'reset', modifiedUrl)
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const modifiedUrl = overrideBaseUrl(
        url,
        process.env.BACKEND_URL as string,
      )
      await sendAuthEmail(user.email, 'signup', modifiedUrl)
    },
    autoSignInAfterVerification: true,
  },
  trustedOrigins: [process.env.FRONTEND_URL].filter(Boolean) as string[],
})

export const betterAuthPlugin = new Elysia({ name: 'better-auth' })
  .mount(auth.handler)
  .macro({
    auth: {
      async resolve({ status, set, request: { headers } }) {
        const session = await auth.api.getSession({
          headers,
        })

        if (!session) {
          set.headers['response-origin'] = 'replai-cad-backend'
          return status(401)
        }

        return {
          user: session.user,
          session: session.session,
        }
      },
    },
  })
