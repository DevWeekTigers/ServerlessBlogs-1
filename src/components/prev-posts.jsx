import Feed from './feed';
import Categories from './categories';
import { TEST_POSTS } from '../assets/test-posts';
import '../App.css';

const userPosts = TEST_POSTS.filter((post) => post.user); // update this when integrating Users

const categories = [...new Set(userPosts.map((post) => post.category))];

const PrevPosts = () => {
  return (
    <div className="prev-posts-container comp">
      <p>this is the PrevPosts container</p>
      <Categories categories={categories} />
      <Feed posts={userPosts} />
    </div>
  );
};

export default PrevPosts;
