import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

import { api } from '@/lib/axios'
import dayjs from 'dayjs'
import { calculateRelativeTime } from '@/utils/calculateRelativeTime'

import { Avatar } from '@/components/Avatar'
import { Menu } from '@/components/Menu'
import { Menu as MenuResponsive } from '@/components/Responsive/Menu'
import { PageTitle } from '@/components/PageTitle'
import { Rating } from '@/components/Rating'
import { SearchInput } from '@/components/Forms/SearchInput'

import {
  Book,
  BookmarkSimple,
  Books,
  Spinner,
  User,
  UserList,
} from '@phosphor-icons/react'

import {
  Container,
  Main,
  Content,
  ReviewSection,
  ReviewsList,
  ReviewItem,
  ReviewBox,
  BookInfo,
  BookReview,
  BookDescription,
  ProfileSection,
  ProfileHeader,
  ProfileStatus,
  StatusItem,
  StatusDescription,
  EmptyResults,
  LoadingSpinner,
} from './styles'

type MetricsType = {
  totalPages: number
  totalAuthors: number
  ratedBooks: number
  categoryMostRead: string | null
}

type RatingType = {
  id: string
  rate: number
  description: string
  createdAt: string
  book: {
    name: string
    author: string
    image: string
  }
}

type InfoType = {
  name: string
  avatar: string
  createdAt: string
  ratings: RatingType[]
}

export default function Home() {
  const { query } = useRouter()
  const { userId } = query

  const [isLoading, setIsLoading] = useState(false)
  const [bookOrAuthorInputText, setBookOrAuthorInputText] = useState('')
  const [userMetrics, setUserMetrics] = useState({} as MetricsType)
  const [userInfo, setUserInfo] = useState({
    avatar: '',
    createdAt: '',
    name: '',
    ratings: [],
  } as InfoType)

  // VARIÁVEL AUXILIAR - ATUA DIRETAMENTE NOS FILTROS //
  const [ratings, setRatings] = useState<RatingType[]>([] as RatingType[])

  // CHAMADA API PARA BUSCAR OS DADOS DO USUÁRIO //
  useEffect(() => {
    async function loadUserInfoAndMetrics() {
      setIsLoading(true)

      const { user } = await api
        .get(`/users/metrics/${userId}`)
        .then((res) => res.data)

      const ratingsFormatted = user.info.ratings.map((rating: RatingType) => {
        return {
          ...rating,
          createdAt: calculateRelativeTime(rating.createdAt),
        }
      })

      const userInfoFormatted = {
        ...user.info,
        createdAt: String(dayjs(user.info.createdAt).year()),
      } as InfoType

      setUserMetrics(user.metrics)
      setUserInfo(userInfoFormatted)
      setRatings(ratingsFormatted)
      setIsLoading(false)
    }

    loadUserInfoAndMetrics()
  }, [userId])

  // FUNÇÃO - BUSCAR CORRESPONDÊNCIA //
  // FILTRAR POR NOME DE LIVRO OU NOME DE AUTOR //
  function onSearchingBookOrAuthor(text: string) {
    if (text.length > 0) {
      const formattedText = text.trim().toLocaleLowerCase()

      const filteredList = userInfo.ratings.filter((rating) => {
        return (
          (rating.book.name.toLocaleLowerCase().includes(formattedText) ||
            rating.book.author.toLocaleLowerCase().includes(formattedText)) &&
          rating
        )
      })

      setRatings(filteredList)
    } else {
      setRatings(userInfo.ratings)
    }

    setBookOrAuthorInputText(text)
  }

  const isRatingListEmpty = userInfo.ratings.length === 0

  return (
    <Container>
      <Menu />
      <MenuResponsive />

      <Main>
        <PageTitle title="Perfil" Icon={User} />

        <Content>
          <ReviewSection>
            <SearchInput
              placeholder="Buscar livro ou autor"
              size="full"
              value={bookOrAuthorInputText}
              onSearchingChange={(e) => onSearchingBookOrAuthor(e)}
            />

            <ReviewsList>
              {!isLoading ? (
                !isRatingListEmpty ? (
                  ratings.map((rating) => (
                    <ReviewItem key={rating.id}>
                      <span>{rating.createdAt}</span>

                      <ReviewBox>
                        <BookInfo>
                          <Image
                            src={rating.book.image}
                            width={98}
                            height={134}
                            alt={rating.book.name}
                          />

                          <BookDescription>
                            <h2>{rating.book.name}</h2>
                            <span>{rating.book.author}</span>
                            <Rating rating={rating.rate} />
                          </BookDescription>
                        </BookInfo>

                        <BookReview>{rating.description}</BookReview>
                      </ReviewBox>
                    </ReviewItem>
                  ))
                ) : (
                  <EmptyResults>Sem avaliações cadastradas</EmptyResults>
                )
              ) : (
                <div>Carregando...</div>
              )}
            </ReviewsList>
          </ReviewSection>

          <ProfileSection>
            {!isLoading ? (
              <>
                <ProfileHeader>
                  <Avatar
                    avatarUrl={userInfo.avatar}
                    username={userInfo.name}
                    size="xl"
                  />

                  <h2>{userInfo.name}</h2>
                  <span>Membro desde {userInfo.createdAt}</span>
                </ProfileHeader>

                <hr />

                <ProfileStatus>
                  <StatusItem>
                    <Book size={32} />
                    <StatusDescription>
                      <strong>{userMetrics.totalPages}</strong>
                      <span>Páginas lidas</span>
                    </StatusDescription>
                  </StatusItem>

                  <StatusItem>
                    <Books size={32} />
                    <StatusDescription>
                      <strong>{userMetrics.ratedBooks}</strong>
                      <span>Livros avaliados</span>
                    </StatusDescription>
                  </StatusItem>

                  <StatusItem>
                    <UserList size={32} />
                    <StatusDescription>
                      <strong>{userMetrics.totalAuthors}</strong>
                      <span>Autores lidos</span>
                    </StatusDescription>
                  </StatusItem>

                  <StatusItem>
                    <BookmarkSimple size={32} />
                    <StatusDescription>
                      <strong>
                        {userMetrics.categoryMostRead
                          ? userMetrics.categoryMostRead
                          : '-'}
                      </strong>
                      <span>Categoria mais lida</span>
                    </StatusDescription>
                  </StatusItem>
                </ProfileStatus>
              </>
            ) : (
              <LoadingSpinner>
                <Spinner size={32} />
                Carregando...
              </LoadingSpinner>
            )}
          </ProfileSection>
        </Content>
      </Main>
    </Container>
  )
}

// GET SERVER SIDE //
// GARANTINDO QUE APENAS USUÁRIOS LOGADOS VERÃO ESTÁ PÁGINA //
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return {
      redirect: {
        permanent: true,
        destination: '/',
      },
    }
  }

  return {
    props: {},
  }
}
