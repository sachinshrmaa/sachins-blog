

import Link from "next/link";
import moment from 'moment'
import styles from "../styles/FeaturedPost.module.css"


const LatestPost = ({key, title, slug, date, coverImage, excerpt}) => {
    return (  
        <Link href={slug} className='text-decoration-none text-dark' key={key}>
            <div className="card border-0 my-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={coverImage.url} alt={title} className="card-img" />
                    </div>
                    <div className="card-body col-md-6 align-self-center">
                        <h1 className={styles.featuredcardTitle}>{title}</h1>
                        <p className={styles.featuredcardBody}>{excerpt}</p>
                        <small className={styles.cardMeta}>{moment(date).format('MMMM D, YYYY')}</small>
                    </div>
                </div>
            </div>
        </Link>
    );
}
 
export default LatestPost;