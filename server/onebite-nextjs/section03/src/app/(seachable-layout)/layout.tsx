import { Suspense } from "react";
import SearchBar from "../../components/SearchBar";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div className="my-4">Loading search...</div>}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}