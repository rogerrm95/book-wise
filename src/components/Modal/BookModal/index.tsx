import { api } from '@/lib/axios'
import * as Dialog from '@radix-ui/react-dialog'

import { Card } from '@/components/Card'
import { Comment, RatingType } from '@/components/Comment'

import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'

import {
  Content,
  Overlay,
  BookDetails,
  BookAbout,
  AboutItem,
  Ratings,
} from './styles'
import { useEffect, useState } from 'react'

type BookType = {
  id: string
  name: string
  imageUrl: string
  author: string
  categories: Array<string>
  average: number
  totalPages: number
}

interface BookModalProps {
  open: boolean
  book: BookType
  onOpenChange: (open: boolean) => void
}

export function BookModal({ book, onOpenChange, open }: BookModalProps) {
  const [ratings, setRatings] = useState<RatingType[]>([] as RatingType[])

  useEffect(() => {
    async function loadRatingsInfo(bookId: string) {
      const { ratings } = await api
        .get(`/ratings/book/${bookId}`)
        .then((res) => res.data)

      console.log(ratings)
      setRatings(ratings)
    }

    if (book) {
      loadRatingsInfo(book.id)
    }
  }, [book])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Overlay />

      <Content>
        <BookDetails>
          <Card
            author={book.author}
            image={{ url: book.imageUrl, height: 242, width: 170 }}
            name={book.name}
            rating={book.average}
            disabled
          />

          <BookAbout>
            <AboutItem>
              <BookmarkSimple size={24} weight="bold" />
              <div>
                <span>Categoria</span>
                <strong>Educação</strong>
              </div>
            </AboutItem>

            <AboutItem>
              <BookOpen size={24} weight="bold" />
              <div>
                <span>Páginas</span>
                <strong>{book.totalPages}</strong>
              </div>
            </AboutItem>
          </BookAbout>
        </BookDetails>

        <Ratings>
          {ratings.length !== 0 &&
            ratings.map((rating) => (
              <Comment key={rating.id} rating={rating} />
            ))}
        </Ratings>
      </Content>
    </Dialog.Root>
  )
}
