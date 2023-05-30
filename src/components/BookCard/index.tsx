import Image from 'next/image'

import { CardContainer, InfoBox, Header, Description, Option } from './styles'
import { Rating } from '../Rating'

export function BookCard() {
  return (
    <CardContainer>
      <Image
        src={'/images/o-hobbit.png'}
        alt="LIVRO"
        title="O Hobbit"
        width={108}
        height={152}
        quality={75}
      />

      <InfoBox>
        <Header>
          <span>Há 2 dias</span>

          <Rating avaliationNumber={3} />
        </Header>

        <Description>
          <p>O Hobbit</p>
          <span>J.R.R. Tolkien</span>
        </Description>

        <Option>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </Option>
      </InfoBox>
    </CardContainer>
  )
}
