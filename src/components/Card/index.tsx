import { Star } from '@phosphor-icons/react'

import { CardContainer, BookImage, BookInfo, BookRating } from './styles'

export function Card() {
  return (
    <CardContainer>
      <BookImage
        src={'/images/14-habitos-de-desenvolvedores-altamente-produtivos.png'}
        alt="14 Hábitos de Desenvolvedores Altamente Produtivo"
        title="Livro: 14 Hábitos de Desenvolvedores Altamente Produtivo"
        width={64}
        height={94}
        quality={100}
      />
      <BookInfo>
        <p title="14 Hábitos de Desenvolvedores Altamente Produtivo">
          14 Hábitos de Desenvolvedores Altamente Produtivo
        </p>

        <span>Zeno Rocha</span>

        <BookRating>
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" />
        </BookRating>
      </BookInfo>
    </CardContainer>
  )
}
