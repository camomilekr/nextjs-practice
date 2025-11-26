'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const q = useSearchParams().get('q') as string;
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  }

  useEffect(() => {
    if (q) {
      setSearch(q as string);
    }
  }, [q]);

  return (
    <div className="my-4">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search" 
          className="border border-gray-300 rounded-md p-2 flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md shrink-0 w-24" 
          type="submit"
        >
          검색
        </button>
      </form>    
    </div>
  );
}