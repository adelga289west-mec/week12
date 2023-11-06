import { useState } from 'react';
import '../Styles/BlogPage.css';
import BlogSection from './BlogSection';
import Filters from './Filters';

function BlogPage({user}) {

  return (
    <div className="blog-grid">
      <BlogSection user={user} />
      {/* <Filters /> */}
    </div>
  )
}

export default BlogPage;