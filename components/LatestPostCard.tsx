import Link from "next/link";
import moment from "moment";


const LatestPost = ({ title, subtitle, date, slug, thumbnail }) => {
  return (
    <div className="rounded-md mb-10 grid lg:grid-cols-2 gap-6 items-center">
      <img src={thumbnail} alt={title} className="rounded-t-md md:rounded-l-lg md:rounded-tr-none" />
      <Link href={slug}>
        <small className="latest-post-meta">{moment(date).format("MMMM D, YYYY")}</small>
        <h1 className="latest-post-title">{title}</h1>
        <p className="latest-post-body">{subtitle}</p>
      </Link>
    </div>
  );
};

export default LatestPost;
