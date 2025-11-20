import { BookEntity } from '@/types/book';
import axios from 'axios';

export default async function fetchBook(id: number): Promise<BookEntity | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('Failed to fetch book');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
}