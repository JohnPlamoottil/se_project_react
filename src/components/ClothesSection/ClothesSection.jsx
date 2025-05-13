import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
function ClothesSection({ cards, handleCardClick }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Clothes Section</p>
        <button> Add New</button>
      </div>
      <ul className="main__items">
        {cards.map((filteredCard) => {
          return (
            <ItemCard
              key={filteredCard._id}
              card={filteredCard}
              onCardClick={handleCardClick}
            />
          );
        })}
        ;
      </ul>
    </div>
  );
}

export default ClothesSection;
