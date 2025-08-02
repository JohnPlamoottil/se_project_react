import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
function Profile({
  cards,
  handleCardClick,
  addNew,
  showEditModal,
  onLogout,
  onCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar showEditModal={showEditModal} onLogout={onLogout} />
      </section>
      <ClothesSection
        cards={cards}
        handleCardClick={handleCardClick}
        addNew={addNew}
        onCardLike={onCardLike}
      ></ClothesSection>
    </div>
  );
}

export default Profile;
