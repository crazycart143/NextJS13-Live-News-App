import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: "a1a8eee12e2f5e939f7e90d7be29cb28"
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        pagination {
          count
          limit
          offset
          total
        }
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
      }
    }
  `;
  //fetch function with NextJS 13 caching
  const res = await fetch(
    "https://midsayap.stepzen.net/api/coiled-parrot/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      //you will always get up to date with latest news every after 20 seconds
      //revalidate for 20 seconds will get new data
      //if it is dynamic, then we dont need to revalidate it thats why it is 0
      //else if not dynamic, revalidate every after 20 seconds
      //the cached value is gonna be served in 20 second value
      //after 20 seconds, its going to refresh the new value
      //this is called ISR - Incremental Static Generation
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        //this is used because we are sending json to stringify
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        //stepzen expects variables when using rest API
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();
  //Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  //return response
  return news;
};

export default fetchNews;

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=a1a8eee12e2f5e939f7e90d7be29cb28"
