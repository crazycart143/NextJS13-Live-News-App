import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // graphQL query
  const query = gql`
    query myQuery($access_key: String!, $limit: String, $offset: String) {
      myQuery(
        access_key: $access_key
        countries: "ph"
        limit: $limit
        offset: $offset
        sort: "published_desc"
      ) {
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
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function w/ next 13
  const res = await fetch(
    "https://midsayap.stepzen.net/api/coiled-parrot/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 10000 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.ACCESS_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log("LOADING NEW DATA FROM API FOR CATEGORY -> ", category, keywords);
  const newsResponse = await res.json();
  // sort function
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
  // return results
};

export default fetchNews;

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=a1a8eee12e2f5e939f7e90d7be29cb28&countries=ph&limit=100&offset=0&sort=published_desc"
