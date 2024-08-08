interface ProductCardProps{
    name: string;
    rating: string;
    image: string;
    starting_price: string;
    ending_price: string;
}
export default function Productcard({name, rating, image, starting_price, ending_price}: ProductCardProps) {
  return (
    <div>
      <img src={image} alt={name}/>
        <h1>{name}</h1>
        <div>{rating}</div>
        <div className="flex flex row gap-3">
            <p>{starting_price}</p>
            <p>{ending_price}</p>
        </div>
        <div className="flex flex row gap-3">
            <button>Add to card</button>
            <button>Buy now</button>
        </div>
    </div>
  )
}