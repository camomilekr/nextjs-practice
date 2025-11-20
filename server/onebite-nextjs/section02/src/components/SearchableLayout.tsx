import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import styles from './SearchableLayout.module.css';

export default function SearchableLayout({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const q = router.query.q as string;

  useEffect(() => {
    if (q) {
      setSearch(q);
    }
  }, [q]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearch = () => {
    const searchText = search.trim();
    if (searchText === '' || searchText === q) return;
    router.push(`/search?q=${searchText}`);
  }

  return (
    <div>
      <div className={styles.searchbar_container}>
        <input 
          className={styles.searchbar_input}
          type="text" 
          placeholder="검색어를 입력하세요" 
          value={search} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown}
        />
        <button className={styles.searchbar_button} onClick={handleSearch}>검색</button>
      </div>
      {children}
    </div>
  )
}