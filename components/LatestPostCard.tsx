import Link from "next/link";
import moment from "moment";


const LatestPost = ({ title, subtitle, date, slug, thumbnail }) => {
  return (
    <div className="rounded-md mb-10 grid lg:grid-cols-2 gap-4 items-center">
      <img src={thumbnail} alt={title} className="rounded-l-lg" />
      <Link href={slug}>
        <small>{moment(date).format("MMMM D, YYYY")}</small>
        <h1 className="text-4xl font-semibold mb-2">{title}</h1>
        <p>{subtitle}</p>
      </Link>
    </div>
  );
};

export default LatestPost;
