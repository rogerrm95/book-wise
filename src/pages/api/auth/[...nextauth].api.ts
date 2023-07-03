import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'

import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'

import { PrismaAdapter } from '@/lib/auth/prisma-adapter'
import { setCookie } from 'nookies'

export function buildNextAuthOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),

    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
        profile: (profile: GoogleProfile) => {
          return {
            id: profile.sub,
            name: profile.name,
            avatar_url: profile.picture,
            email: profile.email,
          }
        },
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',
        profile: (profile: GithubProfile) => {
          return {
            id: String(profile.id),
            name: profile.name ?? '',
            avatar_url: profile.avatar_url,
            email: profile.email ?? '',
          }
        },
      }),
    ],
    callbacks: {
      async session({ session, user }) {
        return {
          ...session,
          user,
        }
      },
      async signIn(params) {
        setCookie({ res }, '@ignitecall:userId', params.user.id, {
          // Todo cookie necessita de uma data de expiração //
          maxAge: 60 * 60 * 24 * 1, // 1 days
          path: '/',
        })
        return true
      },
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
