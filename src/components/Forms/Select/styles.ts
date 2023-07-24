import { styled } from '@stitches/react'

import * as Select from '@radix-ui/react-select'

export const SelectTrigger = styled(Select.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $1',
  position: 'relative',

  fontSize: '$sm',
  // borderBottom: '1px solid $colors$gray500',
  border: '1px solid $colors$gray500',
  borderRadius: '$sm',
  color: '$gray400',

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    color: '$green100',
    borderColor: '$green100',
  },

  '&[data-state=open]': {
    color: '$green100',
    borderColor: '$green100',
  },

  variants: {
    size: {
      sm: {
        width: '25%',

        // MOBILE //
        '@media(max-width: 600px)': {
          width: '100%',
        },
      },
      md: {
        width: '50%',
        // MOBILE //
        '@media(max-width: 600px)': {
          width: '100%',
        },
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
  backgroundColor: '$gray700',
  borderRadius: 6,
  boxShadow: '0px 1px 10px 10px rgba(20, 23, 24, 0.9)',

  padding: '$2',
  height: '400px',
  position: 'absolute',
  top: 72,
  left: 12,
})

export const SelectViewport = styled(Select.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  padding: '$2',
  marginBottom: '$1',
  width: '100%',
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
