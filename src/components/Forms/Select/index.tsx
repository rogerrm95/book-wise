import * as SelectRadix from '@radix-ui/react-select'

import { CaretDown, BookmarkSimple } from '@phosphor-icons/react'

import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectTrigger,
  SelectViewport,
} from './styles'

export function Select() {
  return (
    <SelectRadix.Root>
      <SelectTrigger size="md" align="left">
        <SelectRadix.Value placeholder="Selecione uma categoria ..." />

        <SelectIcon>
          <CaretDown size={14} weight="bold" />
        </SelectIcon>
      </SelectTrigger>

      <SelectRadix.Portal>
        <SelectContent>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>
                <BookmarkSimple size={16} weight="bold" />
                Categorias
              </SelectLabel>
              <SelectItem value="1">
                <SelectItemText>Item 1</SelectItemText>
              </SelectItem>

              <SelectItem value="2">
                <SelectItemText>Item 2</SelectItemText>
              </SelectItem>

              <SelectItem value="3">
                <SelectItemText>Item 3</SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>
        </SelectContent>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
