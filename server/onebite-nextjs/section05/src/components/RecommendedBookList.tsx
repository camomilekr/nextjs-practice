import fetchRandomBooks from "@/lib/fetchRandomBooks";
import BookItem from "./BookItem";
import { BookEntity } from "@/types/book";

export default async function RecommendedBookList() {
  const recommendedBooks = await fetchRandomBooks({ next: { revalidate: 3 } });

  if (!recommendedBooks) {
    return (
      <section>
        <div className="font-bold text-2xl text-black my-4 pl-2">지금 추천하는 도서</div>
        <div>추천 도서를 불러오는 중 오류가 발생했습니다.</div>
      </section>
    );
  }

  return (
    <section>
      <div className="font-bold text-2xl text-black my-4 pl-2">지금 추천하는 도서</div>
      {recommendedBooks.map((book: BookEntity) => (
        <BookItem key={book.id} book={book} />
      ))}
    </section>
  );
}