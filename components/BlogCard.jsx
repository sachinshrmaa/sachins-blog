
import Link from "next/link";
import moment from 'moment'
import styles from "../styles/BlogCard.module.css"

const BlogPost = ({key, title, slug, date, coverImage, excerpt}) => {

    return (  
        <Link href={slug} className="text-decoration-none text-dark">
            <div className="card border-0 my-3" key={key}>
                <div className="row">
                    <div className="col-6 col-md-12">
                        <img src={coverImage.url} alt={title} className="card-img" />
                    </div>
                    <div className="col-6 col-md-12">
                        <div className="my-md-3 my-1">
                            <h5 className={styles.cardTitle}>{title}</h5>
                            <p className={styles.cardBody}>{excerpt}</p>
                            <small className={styles.cardMeta}>{moment(date).format('MMMM D, YYYY')}</small>
                        </div>
                    </div>
                </div> 
            </div>
        </Link> 
    );
}
 
export default BlogPost;