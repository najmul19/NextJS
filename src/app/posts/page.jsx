import React from "react";
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {posts.map((singlePost) => {
        return (
          
            <div key={singlePost.id}>
              <p>{singlePost.title}</p>
              <p>{singlePost.body}</p>
            </div>
          
        );
      })}
    </div>
  );
};

export default Posts;
