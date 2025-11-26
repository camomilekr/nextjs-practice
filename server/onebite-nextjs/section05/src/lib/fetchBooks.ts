import { BookEntity } from '@/types/book';

export default async function fetchBooks(): Promise<BookEntity[] | null> {
  const url = `${process.env.API_SERVER_URL}/book`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return null;
  }
}