type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: int;
  limit: int;
  offset: int;
  total: int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

//if it is type category, it can only be one of the
type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "techology";
