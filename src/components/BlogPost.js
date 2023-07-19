import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: We meet once again. *_*" />
      <Comment commentText="You better watch your back - Unknown person" />
      <Comment commentText="Cause I'm coming for you. - Unknown person" />
      <Comment commentText="Just kidding! I'm already at your house.... - Unknown person" />
    </div>
  );
}

export default BlogPost;
