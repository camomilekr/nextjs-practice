import { Suspense } from "react";
import SearchBar from "../../components/SearchBar";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}