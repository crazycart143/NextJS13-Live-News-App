type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <div>
      <h1 className="">{article.title}</h1>
    </div>
  );
}

export default Article;
