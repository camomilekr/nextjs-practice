import SearchableLayout from '@/components/SearchableLayout';
import { BookEntity } from '@/types/book';
import BookItem from '@/components/BookItem';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import searchBooks from '@/lib/searchBooks';
import Head from 'next/head';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { q } = context.query;  
  
  const books = await searchBooks(q as string);

  return {
    props: { books },
  };
}

export default function Search({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <Head>
        <title>띨리의 서재 - 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="띨리의 서재 - 검색 결과" />
        <meta property="og:description" content="책을 검색하고 추천 도서를 확인해보세요." />        
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <div>
        {books.map((book: BookEntity) => (
            <BookItem key={book.id} book={book} />
          ))}
      </div>
    </>
  )
}

Search.getLayout = (page: React.ReactNode) => {
  return (
    <SearchableLayout>
      {page}
    </SearchableLayout>
  )
}