import { useContext } from "react";
import "./ItemCard.css";
import heartIcon from "../../assets/heart.png";
import heartFilledIcon from "../../assets/heart-filled.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ItemCard = ({ card, onCardClick, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = card.likes.some((id) =>
    currentUser ? id === currentUser._id : false
  );

  const handleCardClick = () => {
    onCardClick(card);
  };

  const handleCardLike = () => {
    onCardLike({ id: card._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__info">
        <h2 className="card__name">{card.name}</h2>
        {currentUser && (
          <img
            src={isLiked ? heartFilledIcon : heartIcon}
            className="card__icon"
            alt="heart-icon"
            onClick={handleCardLike}
          />
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={card.imageUrl}
        alt={card.name}
      />
    </li>
  );
};

export default ItemCard;

// Phoenix informed me of unsplash to get pictures for W2W
// src "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
// red blouse

// change div to li because we are using ul on line14 of Main.jsx
