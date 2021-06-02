import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment'


const Archive = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    var loadingSpinner = <span>loading...</span>

    const fetchPosts = async () => {
        setLoading(true)
        const res = await axios.get('https://api.sachinsblog.in/api/posts/')
        setPosts(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    const displayPosts = () => {
        return(posts.map(post => (
            <p key={post.id}><span className="text-muted">{moment(post.timestamp).format('MMMM, YYYY')}</span> ~ <a href={post.slug}>{post.title}</a></p>
        )))
    }



    return (
        <div className="col-md-8 col-11 m-auto my-5">
            <h3>Archive</h3>
            <p>All the posts I've written so far on this blog on various categories.</p>


            <div className="mt-5">
                {loading ? loadingSpinner : displayPosts() }
            </div>            
            
        </div>
    )
}

export default Archive
