import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPosts from "../../components/getPosts";
import moment from "moment";

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
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh] ">
      <img
        src={post.data.thumbnail}
        alt={post.data.title}
        className="rounded-lg mb-4 max-h-[500px] w-full object-center object-cover"
      />
      <div className="max-w-2xl mx-auto py-1 md:py-8 sm:px-6 lg:px-8">
        <small className="latest-post-meta">
          {moment(post.data.date).format("MMMM D, YYYY")}
        </small>
        <h1 className="post-page-title">{post.data.title}</h1>

        <article className="prose post-page-body">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default PostPage;
