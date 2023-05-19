import Link from 'next/link'
import { Icon } from '@phosphor-icons/react'
import { NavigationContainer } from './styles'

interface NavigationProps {
  Icon: Icon
  label: string
  path: string
}

export function Navigation({ Icon, label, path }: NavigationProps) {
  return (
    <NavigationContainer>
      {<Icon />}
      <Link href={path}>{label}</Link>
    </NavigationContainer>
  )
}
