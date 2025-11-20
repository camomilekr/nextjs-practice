import { BookEntity } from "@/types/book";
import axios from "axios";

export default async function searchBooks(q: string): Promise<BookEntity[]> {
  const url = `http://localhost:12345/book/search?q=${q}`;

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