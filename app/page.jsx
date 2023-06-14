import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import moment from "moment";
import styles from "./page.module.css";
import PromotionCard from "@/components/PromotionCard";
import NewsletterCard from "@/components/NewsletterCard";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      thumbnail: matterResult.data.thumbnail, // Add thumbnail property
      slug: fileName.replace(".md", ""),
    };
  });

  // Sort posts by date in descending order
  posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return posts;
};

export default function Home() {
  const postMetadata = getPostMetadata();

  const latestPost = postMetadata[0];
  const previousPosts = postMetadata.slice(1);

  return (
    <div className="container py-5">
      <div className="row">
        <Link
          href={latestPost.slug}
          className="text-decoration-none text-dark"
          key={latestPost.key}
        >
          <div className="card border-0 my-4">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={latestPost.thumbnail}
                  alt={latestPost.title}
                  className="card-img"
                />
              </div>
              <div className="card-body col-md-6 align-self-center">
                <h1 className={styles.featuredcardTitle}>{latestPost.title}</h1>
                <p className={styles.featuredcardBody}>{latestPost.subtitle}</p>
                <small className={styles.cardMeta}>
                  {moment(latestPost.date).format("MMMM D, YYYY")}
                </small>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <PromotionCard />

      <div className="row my-md-4">
        {previousPosts.map((post) => (
          <div className="col-md-3 mb-4" key={post.slug}>
            <Link href={post.slug} className="text-decoration-none text-dark">
              <div className="card border-0 my-md-3">
                <div className="row">
                  <div className="col-6 col-md-12">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="card-img"
                    />
                  </div>
                  <div className="col-6 col-md-12">
                    <div className="my-md-3 m-1">
                      <h5 className={styles.cardTitle}>{post.title}</h5>
                      <p className={styles.cardBody}>{post.subtitle}</p>
                      <small className={styles.cardMeta}>
                        {moment(post.date).format("MMMM D, YYYY")}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <NewsletterCard />
    </div>
  );
}
