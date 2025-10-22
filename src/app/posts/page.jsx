import Link from "next/link";
import React from "react";
export const getPosts = async () => {
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
          <div key={singlePost.id} className="border-2 border-slate-300">
            <p className="text-2xl font-bold">{singlePost.title}</p>
            <p className="font-semibold ">{singlePost.body}</p>
            <Link href={`/posts/${singlePost.id}`}>
            <button className="rounded-2xl px-5 border-t-cyan-300  bg-purple-600 cursor-pointer">
                Details
            </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
