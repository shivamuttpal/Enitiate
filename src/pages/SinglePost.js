import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Check if id is defined before making the request
        if (id) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await response.json();
          setPost(data);
        }
      } catch (error) { 
        console.error('Error fetching single post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    // Render loading state or return null
    return null;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded-md shadow-md">
        {/* Display single post content */}
        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
        <p className="text-gray-600">{post.body}</p>
      </div>
    </div>
  );
}

export default SinglePost;
