import React from 'react';

const DisplayBlog = ({ blog }) => {
 console.log(blog);
 return (
  <div className=''>
   <div class="card w-96 bg-base-100h-96 shadow-xl">
    <div class="card-body">
     <h2 class="card-title">{blog.title}</h2>
     <p>{blog.blog}</p>
     <div class="card-actions justify-end">
      <button class="btn btn-primary rounded-none">Read More</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DisplayBlog;