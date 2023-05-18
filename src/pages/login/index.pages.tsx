import Image from 'next/image'
import {
  Container,
  HeroImage,
  LoginForm,
  ActionsButtons,
  LoginButton,
} from './styles'

export default function Login() {
  return (
    <Container>
      <HeroImage
        src="/images/background.png"
        alt="Tela de Fundo"
        width={598}
        height={912}
        quality={100}
      />

      <LoginForm>
        <header>
          <h2>Boas vindas!</h2>
          <span>Faça seu login ou acesse como visitante.</span>
        </header>

        <ActionsButtons>
          <LoginButton>
            <Image
              src="/icons/google.svg"
              height={32}
              width={32}
              quality={100}
              alt="Google"
            />
            Entrar com o Google
          </LoginButton>
        </ActionsButtons>
      </LoginForm>
    </Container>
  )
}
