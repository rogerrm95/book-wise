import { Avatar } from '../Avatar'
import { Rating } from '../Rating'
import {
  CommentContainer,
  Header,
  User,
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

        <Rating avaliationNumber={4} />
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
