import BookItem from "@/components/BookItem";
import fetchBooks from "@/lib/fetchBooks";
import fetchRandomBooks from "@/lib/fetchRandomBooks";
import { BookEntity } from "@/types/book";

export default async function Home() {
  const allBooks = await fetchBooks();
  const recommendedBooks = await fetchRandomBooks();

  return (
    <div>
      <section>
        <div className="font-bold text-2xl text-black my-4 pl-2">지금 추천하는 도서</div>
        {recommendedBooks.map((book: BookEntity) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>
      <section>
        <div className="font-bold text-2xl text-black my-4 pl-2 mt-8">등록된 모든 도서</div>
        {allBooks.map((book: BookEntity) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>      
    </div>
  );
}
