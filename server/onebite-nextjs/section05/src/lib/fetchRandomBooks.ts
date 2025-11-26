import { BookEntity } from "@/types/book";

type FetchRandomBooksOptions = RequestInit & {
  cache?: 'no-store' | 'force-cache';
  next?: {
    revalidate?: number;
    tags?: Iterable<string> | undefined;
  } | undefined;
}

const fetchRandomBooks = async (options: FetchRandomBooksOptions = {}): Promise<BookEntity[] | null> => {
  const url = `${process.env.API_SERVER_URL}/book/random`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch random books');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random books:', error);
    return null;
  }
}

export default fetchRandomBooks;