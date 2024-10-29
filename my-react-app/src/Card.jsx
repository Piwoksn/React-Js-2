import profilepic from "./assets/my_img/img.png";
import Button from "./Button/Button";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilepic} alt="profile" />
      <h2 className="card-title">Mccoy Noble</h2>
      <p className="card-text">
        I am a tech enthusiast. One who seeks knowledge to become great
      </p>
      <Button />
    </div>
  );
}

export default Card;
