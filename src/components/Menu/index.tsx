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
import { useSession } from 'next-auth/react'

export function Menu() {
  const router = useRouter()
  const { status, data } = useSession()

  const { pathname } = router
  const isRouteActive = pathname.split('/')

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
          href={'/explore'}
          className={isRouteActive.includes('explore') ? 'active' : ''}
        >
          <Binoculars size={24} />
          Explorar
        </MenuLink>

        <MenuLink
          href={'/profile'}
          className={isRouteActive.includes('profile') ? 'active' : ''}
        >
          <User size={24} />
          Perfil
        </MenuLink>
      </MenuList>

      {status === 'authenticated' ? (
        <MenuSignOutButton>
          <Avatar avatarUrl={data.user.avatar_url} username={data.user.name} />
          <span>{data.user.name} Fernandes da Silva Pereira</span>
          <SignIn size={20} color="#F75A68" weight="bold" />
        </MenuSignOutButton>
      ) : (
        <MenuSignInButton>
          <span>Fazer Login</span>
          <SignIn size={20} color="#7FD1CC" weight="bold" />
        </MenuSignInButton>
      )}
    </MenuContainer>
  )
}
