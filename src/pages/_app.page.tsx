import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <ToastContainer position="top-right" theme="dark" autoClose={3000} />
      </SessionProvider>
    </>
  )
}
