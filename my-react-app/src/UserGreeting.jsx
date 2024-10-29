import PropTypes from "prop-types";
function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.username}</h2>;
  //   } else {
  //     return <h2>Please login to continue</h2>;
  //   }
  // Or do this way

  //   return props.isLoggedIn ? (
  //     <h2 className="welcome-message">Welcome {props.username}</h2>
  //   ) : (
  //     <h2 className="login-prompt">Please login to continue</h2>
  //   );

  // Or
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );

  const loginPrompt = (
    <h2 className="login-prompt">Please login to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};
export default UserGreeting;

UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};
