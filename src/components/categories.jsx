import { useContext } from 'react';
import { PostsContext } from '../contexts/postsContext';

import '../App.css';

const Categories = ({ categories }) => {
  const { posts, setPosts } = useContext(PostsContext);


  // need to persist categories options
  const handleCategoryChange = (e) => {
    const filteredPosts = posts.filter(
      (post) => post.category === e.target.value
    );
    setPosts(filteredPosts);
  };



  
  return (
    <div className="categories-container comp">
      <p>this is the categories container</p>
      <label htmlFor="categories">Categories: </label>
      <select name="categories" id="categories" onChange={handleCategoryChange}>
        <option key="all" value={'all'}>

          All
        </option>


        
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
