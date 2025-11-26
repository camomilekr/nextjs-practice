import { BookEntity } from '@/types/book';
import axios from 'axios';
import { API_URL } from './constant';

export default async function fetchBook(id: number): Promise<BookEntity | null> {
  const url = `${API_URL}/book/${id}`;

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