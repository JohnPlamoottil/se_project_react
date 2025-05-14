import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({ cards, handleCardClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <ClothesSection
        cards={cards}
        handleCardClick={handleCardClick}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
