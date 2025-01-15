function ItemCard({ item }) {
  //   console.log(props.item);
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.link} alt={item.name} />
    </div>
  );
}

export default ItemCard;

// Pheonix informed me of unsplash to get pictures for W2W
// src "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D"
// red blouse
