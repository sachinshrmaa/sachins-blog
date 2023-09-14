import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import getPosts from "../components/getPosts";

export default function Home() {
  const posts = getPosts();

  const postPreviews = posts.map((post, index) => (
    <div key={index}>
      <p>{post.date}</p>

      <Link href={`/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
    </div>
  ));

  return (
    <div>
      <p>Home</p>
      {postPreviews}
    </div>
  );
}
