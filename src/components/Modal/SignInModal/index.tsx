import Image from 'next/image'
import { signIn } from 'next-auth/react'

import * as Dialog from '@radix-ui/react-dialog'

import { X } from '@phosphor-icons/react'

import {
  DialogContent,
  DialogOverlay,
  DialogClose,
  Title,
  ButtonActions,
  ButtonAction,
} from './styles'

interface SignInModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignInModal({ onOpenChange, open }: SignInModalProps) {
  async function handleLogin(provider: 'google' | 'github') {
    await signIn(provider)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <DialogOverlay />

      <DialogContent>
        <DialogClose>
          <X size={24} weight="bold" />
        </DialogClose>

        <Title>Faça login para deixar sua avaliação</Title>

        <ButtonActions>
          <ButtonAction onClick={() => handleLogin('google')}>
            <Image
              src="/icons/google.svg"
              height={32}
              width={32}
              quality={100}
              alt="Google"
            />
            Entrar com Google
          </ButtonAction>
          <ButtonAction onClick={() => handleLogin('github')}>
            <Image
              src="/icons/github.svg"
              height={32}
              width={32}
              quality={100}
              alt="Github"
            />
            Entrar com Github
          </ButtonAction>
        </ButtonActions>
      </DialogContent>
    </Dialog.Root>
  )
}
