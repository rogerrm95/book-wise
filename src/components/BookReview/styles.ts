import { styled } from '@stitches/react'

export const CardContainer = styled('div', {
  display: 'flex',
  gap: '$6',
  padding: '$5 $6',

  backgroundColor: '$gray600',
  borderRadius: '$md',
  border: '1px solid $colors$gray600',
  transition: 'all 0.2s',

  '&:hover': {
    borderColor: '$gray500',
    boxShadow: '0px 0px 8px 1px $colors$gray600',
  },
})

export const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  span: {
    color: 'gray300',
    fontSize: '$sm',
  },
})
export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$4',
})

export const Description = styled('div', {
  display: 'block',

  p: {
    color: '$gray100',
    fontWeight: '$bold',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
export const Option = styled('p', {
  marginTop: '$3',

  color: '$gray400',
  fontSize: '$sm',
})
