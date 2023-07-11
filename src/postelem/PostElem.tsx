import React from "react";

export const PostElem = ({ post }: any) => {
  return (
    <div className="Postelem">
      <h2>{post.title}</h2>
      <h5>{post.body}</h5>
    </div>
  );
};
