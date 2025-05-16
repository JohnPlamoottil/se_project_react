import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
function ClothesSection({ cards, handleCardClick, addNew }) {
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
