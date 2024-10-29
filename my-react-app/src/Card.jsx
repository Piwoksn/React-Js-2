import profilepic from "./assets/my_img/img.png";
function Card() {
  return (
    <div className="card">
      <img src={profilepic} alt="profile" />
      <h2>Mccoy Noble</h2>
      <p>I am a tech enthusiast. One who seeks knowledge to become great</p>
    </div>
  );
}

export default Card;
