import Image from "next/image";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

// pre render news
export default async function Home() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  //categories.join do is create a string of categories General, Business, Technology, Sports and pass it on categories
  return (
    <div>
      <NewsList news={news} />
      {/* NewsList news */}
    </div>
  );
}
