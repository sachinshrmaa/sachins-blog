import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'



const RelatedPosts = ({posts, category}) => {

    const [relatedPosts, setRelatedPosts] = useState([])


    useEffect(() => {
        const filterPosts = async () => {
            setRelatedPosts(posts.filter(posts => posts.category === category))
        }

        filterPosts()
    }, [])


    const truncatePost = (word) => {
        if (word)
            return word.slice(0, 100)+ "...";
        return '';
    }

    


    return(relatedPosts.map(post => {
        return(
            <div class="col-md-3 my-3">
                <Link to={`/${post.slug}`} class="text-decoration-none text-dark" >
                <div class="card border-0" key={post.id}>
                    <img src="https://via.placeholder.com/200x130?text=post+thumbnail" class="card-img-top" alt="thumbnail" />
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
