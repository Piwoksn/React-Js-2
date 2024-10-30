function ProfilePicture() {
  const imageUrl = "./src/assets/my_img/img.png";

  const styles = {
    width: "100px",
  };

  const onHandleClick = () => console.log("OUCH!");

  return (
    <img
      onClick={() => onHandleClick()}
      style={styles}
      src={imageUrl}
      alt="image"
    />
  );
}

export default ProfilePicture;
