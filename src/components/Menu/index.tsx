import Image from 'next/image'
import { useRouter } from 'next/router'

import { Avatar } from '../Avatar'
import { ChartLineUp, Binoculars, SignIn, User } from '@phosphor-icons/react'

import {
  MenuLink,
  MenuContainer,
  MenuList,
  MenuSignInButton,
  MenuSignOutButton,
} from './styles'

export function Menu() {
  const router = useRouter()

  const { pathname } = router
  const isRouteActive = pathname.split('/')

  const isSigned = true

  return (
    <MenuContainer>
      <Image src={'/images/logo.png'} height={32} width={128} alt="Book Wise" />

      <MenuList>
        <MenuLink
          href={'/home'}
          className={isRouteActive.includes('home') ? 'active' : ''}
        >
          <ChartLineUp size={24} />
          Início
        </MenuLink>

        <MenuLink
          href={'/explorar'}
          className={isRouteActive.includes('explorar') ? 'active' : ''}
        >
          <Binoculars size={24} />
          Explorar
        </MenuLink>

        <MenuLink
          href={'/profile'}
          className={isRouteActive.includes('perfil') ? 'active' : ''}
        >
          <User size={24} />
          Perfil
        </MenuLink>
      </MenuList>

      {isSigned ? (
        <MenuSignOutButton>
          <Avatar
            avatarUrl="https://avatars.githubusercontent.com/u/56278484?v=4.png"
            username="Rogério Marques"
          />
          Roger Marques
          <SignIn size={20} color="#F75A68" weight="bold" />
        </MenuSignOutButton>
      ) : (
        <MenuSignInButton>
          Fazer Login
          <SignIn size={20} color="#7FD1CC" weight="bold" />
        </MenuSignInButton>
      )}
    </MenuContainer>
  )
}
