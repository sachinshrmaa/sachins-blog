

import Link from "next/link";
import moment from 'moment'



const LatestPost = ({key, title, slug, date, coverImage, excerpt}) => {
    return (  
        <Link href={slug} className='text-decoration-none text-dark'>
            <div className="row g-0">
                <div className="col-md-6">
                    <img src={coverImage.url} alt={title} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-6 align-self-center ps-md-3">
                    <div className="card-body ">
                        <h1 className="card-title featured-post">{title} </h1>
                        <p className="card-text">{excerpt}</p>
                        <small className="text-muted">{moment(date).format('MMMM D, YYYY')}</small>
                    </div>
                </div>
            </div>
        </Link>
    );
}
 
export default LatestPost;