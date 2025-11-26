import BookItem from "@/components/BookItem";
import searchBooks from "@/lib/searchBooks";
import { BookEntity } from "@/types/book";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;  
  const books = await searchBooks(q as string);
  
  if (!books) {
    return (
      <div>
        <div>검색 결과를 불러오는 중 오류가 발생했습니다.</div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div>
        <div className='font-sm text-gray-500'>검색어 &quot;{q}&quot;에 대한 검색 결과가 없습니다.</div>
      </div>
    );
  }

  return (
    <div>
      {books.map((book: BookEntity) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}