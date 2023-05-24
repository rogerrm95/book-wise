import { Star } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import {
  CommentContainer,
  Header,
  User,
  Rating,
  Content,
  BookImage,
  BookInfo,
  BookHeader,
  BookDescription,
} from './styles'

export function Comment() {
  return (
    <CommentContainer>
      <Header>
        <Avatar
          avatarUrl="https://avatars.githubusercontent.com/u/56278484?v=4.png"
          username="Rogério Marques"
        />
        <User>
          <p>Rogério Marques</p>
          <span>Hoje</span>
        </User>

        <Rating>
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" />
        </Rating>
      </Header>

      <Content>
        <BookImage
          src={'/images/o-hobbit.png'}
          alt="O Hobbit"
          title="O Hobbit"
          width={108}
          height={152}
          quality={100}
        />

        <BookInfo>
          <BookHeader>
            <p>O Hobbit</p>
            <span>J.R.R. Tolkien</span>
          </BookHeader>

          <BookDescription>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh... ver mais
          </BookDescription>
        </BookInfo>
      </Content>
    </CommentContainer>
  )
}
