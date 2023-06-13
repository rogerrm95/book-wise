import { GetServerSideProps } from 'next'
import { getSession, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import {
  Container,
  HeroImage,
  LoginContainer,
  LoginForm,
  ActionsButtons,
  LoginButton,
  SigningMessage,
} from './styles'
import { useEffect } from 'react'

export default function Login() {
  const { data, status } = useSession()
  const router = useRouter()

  async function handleLogin(provider: 'google' | 'github') {
    await signIn(provider)
  }

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/home')
    }
  }, [status, router])

  return (
    <Container>
      <HeroImage
        src="/images/background.png"
        alt="Tela de Fundo"
        width={598}
        height={912}
        quality={100}
      />

      <LoginContainer>
        <LoginForm>
          {/* LOGIN */}
          {status !== 'unauthenticated' ? (
            <SigningMessage>
              <span>
                Entrando <strong>...</strong>
              </span>
            </SigningMessage>
          ) : (
            <>
              <header>
                <h2>Boas vindas!</h2>
                <span>Faça seu login ou acesse como visitante.</span>
              </header>

              <ActionsButtons>
                <LoginButton onClick={() => handleLogin('google')}>
                  <Image
                    src="/icons/google.svg"
                    height={32}
                    width={32}
                    quality={100}
                    alt="Google"
                  />
                  Entrar com o Google
                </LoginButton>

                <LoginButton onClick={() => handleLogin('github')}>
                  <Image
                    src="/icons/github.svg"
                    height={32}
                    width={32}
                    quality={100}
                    alt="Github"
                  />
                  Entrar com o Github
                </LoginButton>

                <LoginButton onClick={() => router.push('/home')}>
                  <Image
                    src="/icons/rocket-launch.svg"
                    height={32}
                    width={32}
                    quality={100}
                    alt="Google"
                  />
                  Acessar como visitante
                </LoginButton>
              </ActionsButtons>
            </>
          )}
        </LoginForm>
      </LoginContainer>
    </Container>
  )
}
