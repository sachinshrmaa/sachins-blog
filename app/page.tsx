import React from "react";
import getPosts from "../components/getPosts";
import PostCard from "../components/PostCard";
import LatestPost from "../components/LatestPostCard";

export default function Home() {
  const posts = getPosts();

  const lastestPost = posts.map((post, index) => {
    if (index === 0) {
      return (
        <LatestPost
          key={index}
          title={post.title}
          subtitle={post.subtitle}
          date={post.date}
          slug={post.slug}
          thumbnail={post.thumbnail}
        />
      );
    }
  });

  const archivePosts = posts.map((post, index) => {
    if (index != 0) {
      return (
        <PostCard
          key={index}
          title={post.title}
          subtitle={post.subtitle}
          slug={post.slug}
          thumbnail={post.thumbnail}
        />
      );
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh]">
      {lastestPost}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
        {archivePosts}
      </div>
    </div>
  );
}
