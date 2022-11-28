
import Link from "next/link";
import moment from 'moment'
import styles from "../styles/BlogCard.module.css"

const BlogPost = ({key, title, slug, date, coverImage, excerpt}) => {

    return (  

        <div className="card border-0 col-md-4 my-3" key={key}>
            <Link href={slug} className="text-decoration-none text-dark">
                {/* <img
                    src={coverImage.url}
                    alt={title}
                    classname="card-img-top"
                /> */}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{excerpt}</p>
                   <p> {key}</p>
                    <small className="text-muted">{moment(date).format('MMMM D, YYYY')}</small>
                </div>
            </Link>
        </div>
        
    );
}
 
export default BlogPost;