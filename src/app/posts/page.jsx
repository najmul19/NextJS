import Link from "next/link";
import style from "./post.module.css"
import React from "react";
export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All Post",
  description: "Loading JSON placeholder post using server component",
};

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id} className="border-2 border-slate-300">
            <p className={`text-2xl font-bold ${style["post-title"]}`}>{singlePost.title}</p>
            <p className="font-semibold testing-purpose-css-class">{singlePost.body}</p>
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
