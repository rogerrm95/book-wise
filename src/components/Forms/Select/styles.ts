import { styled } from '@stitches/react'

import * as Select from '@radix-ui/react-select'

export const SelectTrigger = styled(Select.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2 $3',
  position: 'relative',

  fontSize: '$sm',
  borderBottom: '1px solid $colors$gray500',
  color: '$gray400',

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    color: '$green100',
    borderColor: '$green100',
    borderRadius: '$sm',
  },

  '&[data-state=open]': {
    color: '$green100',
    borderColor: '$green100',
  },

  variants: {
    size: {
      sm: {
        width: '25%',
      },
      md: {
        width: '50%',
      },
      full: {
        width: '100%',
      },
    },

    align: {
      left: {
        marginRight: 'auto',
      },
      center: {
        margin: 'auto',
      },
      right: {
        marginLeft: 'auto',
      },
    },
  },
})

export const SelectIcon = styled(Select.Icon, {
  marginLeft: '$1',
})

export const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '$gray700',
  borderRadius: 6,
  boxShadow: '0px 1px 10px 10px rgba(20, 23, 24, 0.9)',

  padding: '$4',

  width: '100%',
  position: 'absolute',
  top: 120,
  right: 0,
})

export const SelectViewport = styled(Select.Viewport, {
  display: 'flex',
  gap: '$4',
  width: '100%',
  padding: '$2',
})

export const SelectGroup = styled(Select.Group, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  width: 'inherit',
})

export const SelectLabel = styled(Select.Label, {
  color: '$gray400',

  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const SelectItem = styled(Select.Item, {
  cursor: 'pointer',
  padding: '$3 $2',

  '&[data-highlighted]': {
    outline: 'none',

    color: '$gray400',

    borderRadius: '$sm',
    backgroundColor: '$gray800',
  },

  '&[data-state=checked]': {
    outline: 'none',

    color: '$purple100',
    fontWeight: '$bold',

    border: '1px solid $colors$purple100',
    borderRadius: '$sm',

    opacity: 0.5,
  },
})

export const SelectItemText = styled(Select.ItemText, {})
