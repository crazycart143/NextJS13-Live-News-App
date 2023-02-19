import Image from "next/image";
import { Inter } from "@next/font/google";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

// pre render news
export default async function Home() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news);
  //categories.join do is create a string of categories General, Business, Technology, Sports and pass it on categories
  return (
    <main>
      <div>asd</div>
      {/* NewsList news */}
    </main>
  );
}
