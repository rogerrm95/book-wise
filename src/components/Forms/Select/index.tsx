import * as SelectRadix from '@radix-ui/react-select'

import { CaretDown } from '@phosphor-icons/react'

import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectViewport,
} from './styles'

interface SelectProps {
  placeholder: string
  value: string | undefined
  onSelectValue: (option: string) => void
  options: string[]
  size?: 'sm' | 'md' | 'full'
  align?: 'left' | 'center' | 'right'
}

export function Select({
  value,
  onSelectValue,
  options,
  placeholder,
  size = 'full',
  align = 'left',
}: SelectProps) {
  return (
    <SelectRadix.Root value={value} onValueChange={onSelectValue}>
      <SelectTrigger size={size} align={align}>
        <SelectRadix.Value placeholder={placeholder} />

        <SelectIcon>
          <CaretDown size={14} weight="bold" />
        </SelectIcon>
      </SelectTrigger>

      <SelectRadix.Portal>
        <SelectContent>
          <SelectViewport>
            {/* LISTA DE OPÇÕES  */}
            <SelectItem value={''}>
              <SelectItemText>Geral</SelectItemText>
            </SelectItem>

            {options.map((option) => (
              <SelectItem value={option} key={option}>
                <SelectItemText>{option}</SelectItemText>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
