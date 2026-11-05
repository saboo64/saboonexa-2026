import React from 'react';
import PropTypes from 'prop-types';
import './blog-content.css';

// `html` is either cleaned by the server (api/_lib/sanitize.js) or, in the dashboard
// preview, produced by the editor, which can only output its allowed formatting.
const BlogContent = ({ html }) => (
  <div className='blog-content' dangerouslySetInnerHTML={{ __html: html }} />
);

BlogContent.propTypes = {
  html: PropTypes.string,
};

export default BlogContent;
