import { BookEntity } from '@/types/book';

export default async function fetchBook(id: number): Promise<BookEntity | null> {
  const url = `${process.env.API_SERVER_URL}/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch book');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
}