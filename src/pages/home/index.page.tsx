import Image from 'next/image'
import { useRouter } from 'next/router'

import { Avatar } from '@/components/Avatar'
import { ChartLineUp, Binoculars, SignIn, User } from '@phosphor-icons/react'

import {
  Container,
  MenuLink,
  Menu,
  MenuList,
  MenuSignInButton,
  MenuSignOutButton,
} from './styles'

export default function Home() {
  const router = useRouter()

  const { pathname } = router
  const isRouteActive = pathname.split('/')

  return (
    <Container>
      <Menu>
        <Image
          src={'/images/logo.png'}
          height={32}
          width={128}
          alt="Book Wise"
        />

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

        <MenuSignInButton>
          Fazer Login
          <SignIn size={20} color="#7FD1CC" weight="bold" />
        </MenuSignInButton>

        {/* <MenuSignOutButton>
          <Avatar
            avatarUrl="https://avatars.githubusercontent.com/u/56278484?v=4.png"
            username="Rogério Marques"
          />
          Roger Marques
          <SignIn size={20} color="#F75A68" weight="bold" />
        </MenuSignOutButton> */}
      </Menu>
    </Container>
  )
}
