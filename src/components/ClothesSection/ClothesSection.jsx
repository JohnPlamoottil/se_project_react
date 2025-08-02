import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({ cards, handleCardClick, addNew, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const filteredCards = cards.filter((card) => card.owner === currentUser?._id);

  return (
    <div className="clothes-section">
      <div className="clothes-section__subheading">
        <p>Your Items</p>
        <button className="clothes-section__add-new" onClick={addNew}>
          {" "}
          + Add New
        </button>
      </div>
      <ul className="main__items">
        {filteredCards.map((filteredCard) => {
          return (
            <ItemCard
              key={filteredCard._id}
              card={filteredCard}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
