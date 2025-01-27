import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  //   console.log(props.item);
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card" key={item.name}>
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;

// Phoenix informed me of unsplash to get pictures for W2W
// src "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
// red blouse

// change div to li because we are using ul on line14 of Main.jsx
