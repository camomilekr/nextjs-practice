import AllBookList from "@/components/AllBookList";
import RecommendedBookList from "@/components/RecommendedBookList";

export default function Home() {
  return (
    <div>
      <RecommendedBookList />
      <AllBookList />      
    </div>
  );
}
