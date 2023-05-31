import { Rating } from '../Rating'

import { CardContainer, BookImage, BookInfo } from './styles'

interface CardProps {
  image: {
    width: number
    height: number
  }
}

export function Card({ image }: CardProps) {
  return (
    <CardContainer>
      <BookImage
        src={'/images/14-habitos-de-desenvolvedores-altamente-produtivos.png'}
        alt="14 Hábitos de Desenvolvedores Altamente Produtivo"
        title="Livro: 14 Hábitos de Desenvolvedores Altamente Produtivo"
        width={image.width}
        height={image.height}
        quality={100}
      />
      <BookInfo>
        <p title="14 Hábitos de Desenvolvedores Altamente Produtivo">
          14 Hábitos de Desenvolvedores Altamente Produtivo
        </p>

        <span>Zeno Rocha</span>

        <Rating avaliationNumber={5} />
      </BookInfo>
    </CardContainer>
  )
}
