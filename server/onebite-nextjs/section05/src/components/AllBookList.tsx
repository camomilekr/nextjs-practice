import { BookEntity } from "@/types/book";
import BookItem from "./BookItem";
import fetchBooks from "@/lib/fetchBooks";

export default async function AllBookList() {
  const allBooks = await fetchBooks();

  if (!allBooks) {
    return (
      <section>
        <div className="font-bold text-2xl text-black my-4 pl-2">등록된 모든 도서</div>
        <div>등록된 모든 도서를 불러오는 중 오류가 발생했습니다.</div>
      </section>
    );
  }

  return (
    <section>
      <div className="font-bold text-2xl text-black my-4 pl-2">등록된 모든 도서</div>
      {allBooks.map((book: BookEntity) => (
        <BookItem key={book.id} book={book} />
      ))}
    </section>
  );
}