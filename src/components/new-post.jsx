import { useState } from 'react';
import '../App.css';

const defaultNewPostFields = {
  title: '',
  category: '',
  description: '',
};

const NewPost = () => {
  const [newPost, setNewPost] = useState(defaultNewPostFields);
  const { title, category, description } = newPost;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost( { ...newPost, [name]: value })
  }

  const handleSubmit = () => {
    // write some async func here
    console.log('you clicked publish!');
  }

  return (
    <div className="new-post-container comp">
      <p>this is the NewPost container</p>
      <form>
        <input
          className="title"
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          className="category"
          type="text"
          placeholder="category"
          name="category"
          value={category}
          onChange={handleChange}
        />
        <input
          className="description"
          type="textarea"
          placeholder="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>publish</button>
      </form>
    </div>
  );
};

export default NewPost;
