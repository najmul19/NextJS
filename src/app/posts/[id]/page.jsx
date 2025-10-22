import React from "react";
export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
};
const SinglePost = async ({ params }) => {
  const p = await params;
  const SinglePost = await getSinglePost(p.id)
  return <div> 
    <p>
        {JSON.stringify(SinglePost)}
    </p>
    <h1 className="text-2xl font-bold">{SinglePost.title}</h1>
    <p>{SinglePost.body}</p>
  </div>;
};
export default SinglePost;
