import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { api } from '@/lib/axios'

import { Avatar } from '@/components/Avatar'
import { Menu } from '@/components/Menu'
import { PageTitle } from '@/components/PageTitle'
import { Rating } from '@/components/Rating'
import { SearchInput } from '@/components/Forms/SearchInput'

import {
  Book,
  BookmarkSimple,
  Books,
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
  ProfileBox,
  ProfileHeader,
  ProfileStatus,
  StatusItem,
  StatusDescription,
} from './styles'

interface HomeProps {
  metrics: {
    totalPages: number
    totalAuthors: number
    ratedBooks: number
    categoryMostRead: string | null
  }
}

export default function Home({ metrics }: HomeProps) {
  return (
    <Container>
      <Menu />

      <Main>
        <PageTitle title="Perfil" Icon={User} />

        <Content>
          <ReviewSection>
            <SearchInput
              placeholder="Buscar livro ou autor"
              size="full"
              value={'vazio'}
              onSearchingChange={() => {}}
            />

            <ReviewsList>
              <ReviewItem>
                <span>Há 2 dias</span>

                <ReviewBox>
                  <BookInfo>
                    <Image
                      src={
                        '/images/14-habitos-de-desenvolvedores-altamente-produtivos.png'
                      }
                      width={98}
                      height={134}
                      alt="TITULO"
                    />

                    <BookDescription>
                      <h2>
                        14 Hábitos de Desenvolvedores Altamente Produtivos
                      </h2>
                      <span>Aditya Bhargava</span>
                      <Rating rating={2} />
                    </BookDescription>
                  </BookInfo>

                  <BookReview>
                    Tristique massa sed enim lacinia odio. Congue ut faucibus
                    nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                    Vitae fringilla ut et suspendisse enim suspendisse vitae.
                    Leo non eget lacus sollicitudin tristique pretium quam.
                    Mollis et luctus amet sed convallis varius massa sagittis.
                    Proin sed proin at leo quis ac sem. Nam donec accumsan
                    curabitur amet tortor quam sit. Bibendum enim sit dui lorem
                    urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis.
                    Aliquam amet integer pellentesque.
                  </BookReview>
                </ReviewBox>
              </ReviewItem>

              <ReviewItem>
                <span>Há 3 semanas</span>

                <ReviewBox>
                  <BookInfo>
                    <Image
                      src={
                        '/images/14-habitos-de-desenvolvedores-altamente-produtivos.png'
                      }
                      width={98}
                      height={134}
                      alt="TITULO"
                    />

                    <BookDescription>
                      <h2>
                        14 Hábitos de Desenvolvedores Altamente Produtivos
                      </h2>
                      <span>Aditya Bhargava</span>
                      <Rating rating={2} />
                    </BookDescription>
                  </BookInfo>

                  <BookReview>
                    Tristique massa sed enim lacinia odio. Congue ut faucibus
                    nunc vitae non. Nam feugiat vel morbi viverra vitae mi.
                    Vitae fringilla ut et suspendisse enim suspendisse vitae.
                    Leo non eget lacus sollicitudin tristique pretium quam.
                    Mollis et luctus amet sed convallis varius massa sagittis.
                    Proin sed proin at leo quis ac sem. Nam donec accumsan
                    curabitur amet tortor quam sit. Bibendum enim sit dui lorem
                    urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis.
                    Aliquam amet integer pellentesque.
                  </BookReview>
                </ReviewBox>
              </ReviewItem>
            </ReviewsList>
          </ReviewSection>

          <ProfileBox>
            <ProfileHeader>
              <Avatar
                avatarUrl="https://avatars.githubusercontent.com/u/56278484?v=4.png"
                username="Rogério"
                size="xl"
              />

              <h2>Rogério Marques</h2>
              <span>Membro desde 2019</span>
            </ProfileHeader>

            <hr />

            <ProfileStatus>
              <StatusItem>
                <Book size={32} />
                <StatusDescription>
                  <strong>{metrics.totalPages}</strong>
                  <span>Páginas lidas</span>
                </StatusDescription>
              </StatusItem>

              <StatusItem>
                <Books size={32} />
                <StatusDescription>
                  <strong>{metrics.ratedBooks}</strong>
                  <span>Livros avaliados</span>
                </StatusDescription>
              </StatusItem>

              <StatusItem>
                <UserList size={32} />
                <StatusDescription>
                  <strong>{metrics.totalAuthors}</strong>
                  <span>Autores lidos</span>
                </StatusDescription>
              </StatusItem>

              <StatusItem>
                <BookmarkSimple size={32} />
                <StatusDescription>
                  <strong>
                    {metrics.categoryMostRead ? metrics.categoryMostRead : '-'}
                  </strong>
                  <span>Categoria mais lida</span>
                </StatusDescription>
              </StatusItem>
            </ProfileStatus>
          </ProfileBox>
        </Content>
      </Main>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // DADOS DO USUÁRIO LOGADO //
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  // APENAS USUÁRIOS AUTENTICADOS PODEM VISUALIZAR ESTA PÁGINA //
  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }

  const { userMetrics } = await api
    .get(`/users/metrics/${session.user.id}`)
    .then((res) => res.data)

  console.log(userMetrics)

  return {
    props: {
      metrics: userMetrics,
    },
  }
}
