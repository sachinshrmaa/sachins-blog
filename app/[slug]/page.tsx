import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPosts from "../../components/getPosts";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};

export default PostPage;
