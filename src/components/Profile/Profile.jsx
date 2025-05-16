import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
function Profile({ cards, handleCardClick, addNew }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <ClothesSection
        cards={cards}
        handleCardClick={handleCardClick}
        addNew={addNew}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
