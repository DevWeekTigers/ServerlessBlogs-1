import { useState, useContext } from 'react';
import { PostsContext } from '../contexts/postsContext';
import Feed from '../components/feed';
import Categories from '../components/categories';

//import { TEST_POSTS } from './../assets/test-posts.js';
import logo from '../assets/images/logo512.png';
import '../App.css';

const HomePage = () => {
  const { posts } = useContext(PostsContext);
  const [spin, setSpin] = useState(false);

  const categories = [...new Set(posts.map((post) => post.category))];

  return (




    <div id= "Home" className="tabcontent">

      <header className="App-header">
        

       
          


        <div>

          <h1>Welcome to Serverless Blog</h1>{' '}

          <p>Find the most updated content on your favorite topic and explore.</p>
          

        </div>

        <Categories categories={categories} />

        <Feed posts={posts} />

      </header>

    </div>

  );

};

export default HomePage;
