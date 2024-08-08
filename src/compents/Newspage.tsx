import NewsCard from "./NewsCard";

export default function Newspage() {
  const news = [
    {
      title: "title 1",
      data: "2021-01-01"
    },
    {
      title: "title 2",
      data: "2021-01-01"
    }
  ];

  return (
    <div>
      {news.map((newsItem, index) => (
        <NewsCard
          title={newsItem.title}
          data={newsItem.data}
          key={index}
        />
      ))}
    </div>
  );
}