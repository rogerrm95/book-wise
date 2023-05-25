import { Icon } from '@phosphor-icons/react'
import { PageTitleContainer } from './styles'

interface PageTitleProps {
  title: string
  Icon?: Icon | null
}

export function PageTitle({ title, Icon = null }: PageTitleProps) {
  return (
    <PageTitleContainer>
      {Icon && <Icon size={32} color="#50B2C0" weight="bold" />}

      <h2>{title}</h2>
    </PageTitleContainer>
  )
}
