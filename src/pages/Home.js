import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from '../components/BlogPost';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8000/api/posts/')
          .then(res => setPosts(res.data))
          .catch(err => console.error(err));
  }, []);

  return (
      <div className="container">
          {posts.map(post => (
              <BlogPost key={post.id} post={post} />
          ))}
      </div>
  );
};

export default Home;
