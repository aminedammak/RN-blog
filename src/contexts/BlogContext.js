import React, { useState } from "react";

export default BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts((prevState) => {
      return [...prevState, { title: `Blog post # ${blogPosts.length + 1}` }];
    });
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
