import React from "react";

const Post = props => {
  console.log(props);
  const id = props.match.params.post_id;
  return <div>Soon...</div>;
};

export default Post;
