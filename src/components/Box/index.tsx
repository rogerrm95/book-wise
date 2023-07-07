import { ReactNode } from 'react'

import { BoxContainer } from './styles'

interface BoxProps {
  children: ReactNode
  backgroundMode: 'dark' | 'light'
  textSize?: 'sm' | 'md' | 'lg'
}

export function Box({ children, backgroundMode, textSize = 'md' }: BoxProps) {
  return (
    <BoxContainer bgColor={backgroundMode} textSize={textSize}>
      {children}
    </BoxContainer>
  )
}
