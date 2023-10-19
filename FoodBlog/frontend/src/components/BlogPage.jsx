import { useState } from 'react';
import '../Styles/BlogPage.css';
import BlogSection from './BlogSection';
import Filters from './Filters';

function BlogPage() {

  return (
    <div className="blog-grid">
      <BlogSection />
      <Filters />
    </div>
  )
}

export default BlogPage;