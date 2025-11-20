import SearchableLayout from '@/components/SearchableLayout';
import styles from './index.module.css';
import BookItem from '@/components/BookItem';
import { BookEntity } from '@/types/book';
import { InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/fetchBooks';
import fetchRandomBooks from '@/lib/fetchRandomBooks';
import Head from 'next/head';

export const getStaticProps = async () => {
  const [recommendedBooks, allBooks] = await Promise.all([fetchRandomBooks(), fetchBooks()]);

  return {
    props: { 
      recommendedBooks, 
      allBooks, 
    },
  };
}

export default function Home({ recommendedBooks, allBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>띨리의 서재</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="띨리의 서재" />
        <meta property="og:description" content="책을 검색하고 추천 도서를 확인해보세요." />        
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="띨리의 서재" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />        
      </Head>
      <div className={styles.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recommendedBooks.map((book: BookEntity) => (
            <BookItem key={book.id} book={book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book: BookEntity) => (
            <BookItem key={book.id} book={book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return (
    <SearchableLayout>
      {page}
    </SearchableLayout>
  )
}