import Post from './post';

import '../App.css';

const Feed = ({ posts }) => {
  return (
    <div className="feed-container comp">
      <p>this is the feed container</p>
      {posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};

export default Feed;
