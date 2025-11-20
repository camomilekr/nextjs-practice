import Image from 'next/image';
import styles from './BookDetail.module.css';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import fetchBook from '@/lib/fetchBook';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true,
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params!;
  const book = await fetchBook(Number(id));

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: { book },
  };
}

export default function Book({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>도서를 찾고 있습니다...</div>;
  }

  if (!book) {
    return <div>도서를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <Head>
        <title>띨리의 서재 - {book.title}</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content={`띨리의 서재 - ${book.title}`} />
        <meta property="og:description" content={book.description} />        
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="띨리의 서재" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />        
      </Head>
      <div>
        {book && (
          <div>
            <div 
              className={styles.book_detail_image_container}
              style={{backgroundImage: `url(${book.coverImgUrl})`}}
            >
              <Image 
                  className={styles.book_detail_image}
                  src={book.coverImgUrl} alt={book.title} width={300} height={400} style={{ objectFit: 'scale-down' }} 
              />
            </div>
            <div className={styles.book_detail_content}>
              <div className={styles.book_detail_title}>{book.title}</div>
              <div className={styles.book_detail_sub_title}>{book.subTitle}</div>
              <div className={styles.book_detail_author}>{book.author} | {book.publisher}</div>
              <div className={styles.book_detail_description}>{book.description}</div>
            </div>
          </div>        
        )}
      </div>
    </>
    
  );
}