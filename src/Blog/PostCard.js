import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'

const PostCard = ({posts, loading}) => {

    const truncatePost = (word) => {
        if (word)
            return word.slice(0, 100)+ "...";
        return '';
    }

    if(loading){
        return(
            <div class="col-12 mt-4 text-center">
                <p className="post-body">loading...</p>
            </div> 
        )
    }

    return(posts.map(post => {
        return(
            <div class="col-md-4 my-3">
                <Link to={`/${post.slug}`} class="text-decoration-none text-dark" >                    <div class="card border-0">
                    {/* <img src={post.thumbnail} class="card-img-top" alt={post.title} /> */}
                    <div class="card-body">
                        <h5 class="post-card-title">{post.title}</h5> 
                        <div className="post-card-body" dangerouslySetInnerHTML={{__html: truncatePost(post.content)}} />
                        <small className="text-muted">{moment(post.timestamp).format('MMMM D, YYYY')}</small>
                    </div>
                </div>
                </Link>
            </div>             
        )
    }))
}

export default PostCard