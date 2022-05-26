import React from 'react';
import { useQuery } from 'react-query';
import ReactReloadSpinier from '../../Animation/ReactReloadSpinier';
import DisplayBlog from './DisplayBlog';

const Blog = () => {
 const { data: blogs, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/blog`).then(res => res.json()))



 if (isLoading) {
  return <ReactReloadSpinier></ReactReloadSpinier>
 }
 return (
  <div className='grid grid-cols-3 bg-accent py-10 justify-center items-center justify-items-center'>
   {
    blogs.map(blog => <DisplayBlog
     key={blog._id}
     blog={blog}
    >
    </DisplayBlog>)
   }
  </div>
 );
};

export default Blog;