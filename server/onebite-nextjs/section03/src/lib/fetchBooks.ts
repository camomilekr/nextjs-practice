import { BookEntity } from '@/types/book';
import axios from 'axios';
import { API_URL } from './constant';

export default async function fetchBooks(): Promise<BookEntity[]> {
  const url = `${API_URL}/book`;

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