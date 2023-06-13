import { signIn } from 'next-auth/react'

import Image from 'next/image'
import {
  Container,
  HeroImage,
  LoginContainer,
  LoginForm,
  ActionsButtons,
  LoginButton,
} from './styles'

export default function Login() {
  // async function handleLoginWithGoogle() {
  //   const data = await signIn('google')

  //   console.log(data)
  // }

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
          <header>
            <h2>Boas vindas!</h2>
            <span>Faça seu login ou acesse como visitante.</span>
          </header>

          {/* LOGIN */}
          <ActionsButtons>
            <LoginButton onClick={async () => await signIn('google')}>
              <Image
                src="/icons/google.svg"
                height={32}
                width={32}
                quality={100}
                alt="Google"
              />
              Entrar com o Google
            </LoginButton>

            <LoginButton>
              <Image
                src="/icons/github.svg"
                height={32}
                width={32}
                quality={100}
                alt="Github"
              />
              Entrar com o Github
            </LoginButton>

            <LoginButton>
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
        </LoginForm>
      </LoginContainer>
    </Container>
  )
}
