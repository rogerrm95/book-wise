import { AvatarContainer } from './styles'

interface AvatarProps {
  avatarUrl: string
  username: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ avatarUrl, username, size = 'md' }: AvatarProps) {
  return (
    <AvatarContainer
      src={avatarUrl}
      title={username}
      alt={username}
      size={size}
    />
  )
}
