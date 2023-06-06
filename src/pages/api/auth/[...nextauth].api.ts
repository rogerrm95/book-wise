import NextAuth from 'next-auth'

import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import GitHubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET_KEY ?? '',
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
    }),
  ],
}
export default NextAuth(authOptions)
