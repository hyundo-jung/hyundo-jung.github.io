import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [posts, setPosts] = useState([]); // State to store blog posts

  // Fetch blog posts from Django API on component load
  useEffect(() => {
    axios.get('http://localhost:8000/api/posts/')
      .then((response) => {
        setPosts(response.data); // Set the fetched data into state
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.content}</p>
              <p className="card-text">
                <small className="text-muted">Posted on {new Date(post.created_at).toLocaleDateString()}</small>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
