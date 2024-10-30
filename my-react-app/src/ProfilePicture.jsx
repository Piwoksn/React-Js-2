function ProfilePicture() {
  const imageUrl = "./src/assets/my_img/img.png";

  const styles = {
    width: "100px",
  };

  const onHandleClick = (e) => (e.target.style.display = "none");

  return (
    <img
      onClick={(e) => onHandleClick(e)}
      style={styles}
      src={imageUrl}
      alt="image"
    />
  );
}

export default ProfilePicture;
