import { TEST_USERS } from '../assets/test-users';
import '../App.css';

const { firstName, lastName, email, password /* profilePhoto */ } =
  TEST_USERS[0];

const Profile = () => {
  return (
    <div className="profile-container comp">
      <p>this is the user profile container</p>

      <div className="profile-photo">Profile Photo: 🤪</div>
      <div className="first-name">First name: {firstName}</div>
      <div className="last-name">Last name: {lastName}</div>
      <div className="email">email: {email}</div>
      <div className="password">Password: {password}</div>
    </div>
  );
};

export default Profile;
