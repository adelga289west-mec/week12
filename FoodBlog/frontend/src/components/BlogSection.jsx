import { useState } from 'react';
import '../Styles/BlogSection.css';
import BlogBox from './BlogBox';

function BlogSection({user}) {

  return (
    <div className="blog-section-body">
      <BlogBox />
    </div>
  )
}

export default BlogSection;