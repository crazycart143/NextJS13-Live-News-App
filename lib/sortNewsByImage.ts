export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse = {
    //stays with the same pagination number
    pagination: news.pagination,
    //news with image is shown first before news without image
    data: [...newsWithImage, ...newsWithoutImage],
  };

  return sortedNewsResponse;
}
