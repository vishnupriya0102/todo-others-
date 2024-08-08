interface NewsCardProps {
    title: string;
    data: string;
}
export default function NewsCard({title, data}: NewsCardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{data}</p>
    </div>
  )
}