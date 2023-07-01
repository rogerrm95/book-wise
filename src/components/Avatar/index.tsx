import { AvatarContainer } from './styles'

interface AvatarProps {
  avatarUrl: string
  username: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Avatar({ avatarUrl, username, size = 'md' }: AvatarProps) {
  return (
    <AvatarContainer
      src={avatarUrl}
      title={username}
      size={size}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = '/images/user-default.png'
      }}
    />
  )
}
