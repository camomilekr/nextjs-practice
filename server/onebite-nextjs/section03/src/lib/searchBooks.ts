import { BookEntity } from "@/types/book";
import axios from "axios";
import { API_URL } from './constant';

export default async function searchBooks(q: string): Promise<BookEntity[]> {
  const url = `${API_URL}/book/search?q=${q}`;

  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('Failed to search books');
    }
    return response.data;
  } catch (error) {
    console.error('Error searching books:', error);
    return [];
  }
}