import { HTMLAttributes } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { SearchInputContainer, Input } from './styles'

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  size: 'md' | 'sm' | 'full'
}

export function SearchInput({ size, ...rest }: SearchInputProps) {
  return (
    <SearchInputContainer size={size}>
      <Input {...rest} />

      <MagnifyingGlass size={20} />
    </SearchInputContainer>
  )
}
