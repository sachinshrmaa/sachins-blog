import Link from "next/link";

const PostCard = ({ title, subtitle, slug, thumbnail }) => {
  return (
    <div className="rounded-lg flex flex-row md:flex-col gap-3 items-top">
      <img
        src={thumbnail}
        alt={title}
        className="rounded-l-md md:rounded-bl-none md:rounded-t-md w-[45%] md:w-[100%]"
      />
      <Link href={slug}>
        <h1 className="post-card-title mb-2">{title}</h1>
        <p className="post-card-body">{subtitle}</p>
      </Link>
    </div>
  );
};

export default PostCard;
