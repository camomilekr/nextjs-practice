import BookItem from "@/components/BookItem";
import searchBooks from "@/lib/searchBooks";
import { BookEntity } from "@/types/book";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;  
  const books = await searchBooks(q as string);
  return (
    <div>
      {books.map((book: BookEntity) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}