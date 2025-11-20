import { BookEntity } from '@/types/book';
import axios from 'axios';

export default async function fetchBooks(): Promise<BookEntity[]> {
  const url = 'http://localhost:12345/book';

  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch books');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}