import { BookEntity } from "@/types/book";
import Image from "next/image";
import Link from "next/link";

interface BookItemProps {
  book: BookEntity;
}

export default async function BookItem({ book }: BookItemProps) {
  return (
    <Link href={`/book/${book.id}`} className='flex w-full border-b border-gray-200 p-4 cursor-pointer gap-2'>
      <Image
        src={book.coverImgUrl}
        alt={book.title}
        width={80}
        height={120}
        style={{ objectFit: 'cover' }}  
      />
      <div className='flex flex-col justify-center gap-2'>
        <h4 className='text-sm font-bold'>{book.title}</h4>
        <div className='text-sm text-gray-500'>{book.subTitle}</div>          
        <div className='text-sm text-gray-500'>{book.author} | {book.publisher}</div>
      </div>      
    </Link>
  );
}
