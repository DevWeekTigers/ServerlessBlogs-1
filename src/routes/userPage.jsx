import Profile from '../components/profile'
import PrevPosts from '../components/prev-posts';
import NewPost from '../components/new-post';

const UserPage = () => {
  return(
    <div className="user-page page">
      <p>this is the user page</p>
      <Profile />
      <PrevPosts />
      <NewPost />
    </div>
  )
};

export default UserPage;
