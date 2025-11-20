import { BookEntity } from "@/types/book";
import axios from 'axios';

export default async function fetchRandomBooks(): Promise<BookEntity[]> {
  const url = 'http://localhost:12345/book/random';

  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('Failed to fetch random books');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching random books:', error);
    return [];
  }
}