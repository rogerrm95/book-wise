import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

import {
  ChartLineUp,
  Binoculars,
  SignIn,
  User,
  List,
} from '@phosphor-icons/react'

import {
  NavLink,
  MenuContainer,
  HamburguerButton,
  Header,
  NavList,
} from './styles'

export function Menu() {
  const { status, data } = useSession()

  const router = useRouter()
  const { pathname } = router
  const isRouteActive = pathname.split('/')

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // DESLOGAR USUÁRIO //
  async function handleSignOut() {
    await signOut({
      callbackUrl: 'http://localhost:3000/', // <- ALTERAR EM PRODUÇÃO,
    })
  }

  return (
    <MenuContainer>
      <Header>
        <Image
          src={'/images/logo.png'}
          height={32}
          width={128}
          alt="Book Wise"
        />

        <HamburguerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <List size={24} />
        </HamburguerButton>
      </Header>

      {isMenuOpen && (
        <>
          <hr />

          <NavList className={isMenuOpen ? 'menu-open' : ''}>
            <NavLink
              href={'/home'}
              className={isRouteActive.includes('home') ? 'active' : ''}
            >
              <ChartLineUp size={24} />
              Início
            </NavLink>

            <NavLink
              href={'/explore'}
              className={isRouteActive.includes('explore') ? 'active' : ''}
            >
              <Binoculars size={24} />
              Explorar
            </NavLink>

            {status === 'authenticated' && (
              <>
                <NavLink
                  href={`/profile/${data.user.id}`}
                  className={isRouteActive.includes('profile') ? 'active' : ''}
                >
                  <User size={24} />
                  Perfil
                </NavLink>

                <NavLink as={'button'} onClick={handleSignOut}>
                  <SignIn size={24} />
                  Sair
                </NavLink>
              </>
            )}
          </NavList>
        </>
      )}
    </MenuContainer>
  )
}
