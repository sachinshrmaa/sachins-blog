import Link from "next/link";
import moment from "moment";

const PostCard = ({ title, subtitle, date, slug, thumbnail }) => {
  return (
    <div className="rounded-lg">
      <img src={thumbnail} alt={title} className="rounded-t-lg" />
      <div className="p-2">
        <Link href={slug}>
          <small>{moment(date).format("MMMM D, YYYY")}</small>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p>{subtitle}</p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
