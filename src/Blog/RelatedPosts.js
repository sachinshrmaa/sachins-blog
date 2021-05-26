import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'



const RelatedPosts = ({posts, category, loading, currentPost}) => {

    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        const filterPosts = async () => {
            setRelatedPosts(posts.filter(posts => posts.category === category).slice(0, 3))
        }

        filterPosts()
    }, [posts])


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

    
    


    return(relatedPosts.map(post => {
        return(

            <div class="col-md-4 my-3">
                <Link to={`/${post.slug}`} class="text-decoration-none text-dark" >
                <div class="card border-0">
                    {/* <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="thumbnail" /> */}
                    <div class="card-body">
                        <h5 class="card-title">{post.title}</h5>
                        <div className="text-muted" dangerouslySetInnerHTML={{__html: truncatePost(post.content)}} />
                    </div>
                </div>
                </Link>
            </div>
        )        
    }))
}

export default RelatedPosts
