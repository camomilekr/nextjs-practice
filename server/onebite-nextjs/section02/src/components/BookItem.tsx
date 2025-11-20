import { useRouter } from 'next/router';
import { BookEntity } from '@/types/book';
import styles from './BookItem.module.css';
import Image from 'next/image';
interface BookItemProps {
  book: BookEntity;
}

export default function BookItem({ book }: BookItemProps) {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/book/${id}`);
  }

  return ( 
      <div className={styles.book_item_container} onClick={() => handleClick(book.id)}>
        <Image
          src={book.coverImgUrl}
          alt={book.title}
          width={80}
          height={120}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.book_item_content}>
          <h4 className={styles.book_item_title}>{book.title}</h4>
          <div className={styles.book_item_subtitle}>{book.subTitle}</div>          
          <div className={styles.book_item_author}>{book.author} | {book.publisher}</div>
        </div>      
      </div>    
  )
}