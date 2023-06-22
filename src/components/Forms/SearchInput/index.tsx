import { HTMLAttributes } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { SearchInputContainer, Input } from './styles'

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  size: 'md' | 'sm' | 'full'
  value: string
  onSearchingChange: (value: string) => void
}

export function SearchInput({
  size,
  value,
  onSearchingChange,
  ...rest
}: SearchInputProps) {
  return (
    <SearchInputContainer size={size}>
      <Input
        onChange={(e) => onSearchingChange(e.target.value)}
        value={value}
        {...rest}
      />

      <MagnifyingGlass size={20} />
    </SearchInputContainer>
  )
}
