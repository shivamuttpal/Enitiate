import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Redirect to SinglePost page
  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  return (
    <div className="container mx-auto mt-8 min-h-screen flex flex-col">
      <div className="flex-1">
        <h1 className="text-3xl font-bold flex justify-center mb-4">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-2 rounded-md shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
              onClick={() => handlePostClick(post.id)}
            >
              <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-1">{post.title}</h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <nav className="flex justify-between items-center">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-white'} text-blue-500`}
            >
              Previous
            </button>
            <div className="flex space-x-2 items-center">
              <span className="px-4 py-2 border rounded bg-white text-blue-500">{currentPage}</span>
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastPost >= posts.length}
              className={`px-4 py-2 border rounded ${indexOfLastPost >= posts.length ? 'bg-gray-300' : 'bg-white'} text-blue-500`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Posts;
