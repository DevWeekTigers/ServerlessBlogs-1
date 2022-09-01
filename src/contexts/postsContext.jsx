import { createContext, useState } from 'react';
import { TEST_POSTS } from '../assets/test-posts';

export const PostsContext = createContext({
  posts: [],
  setPosts: () => {},
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(TEST_POSTS);
  const value = { posts, setPosts };
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
