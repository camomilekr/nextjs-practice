import { BookEntity } from "@/types/book";

export default async function searchBooks(q: string): Promise<BookEntity[] | null> {
  const url = `${process.env.API_SERVER_URL}/book/search?q=${q}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to search books');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching books:', error);
    return null;
  }
}