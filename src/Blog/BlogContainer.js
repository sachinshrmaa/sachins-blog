import axios from 'axios'
import React, { useEffect, useState} from 'react'

import Pagination from '../Components/Pagination'
import PostCard from './PostCard';



const BlogContainer = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        setLoading(true)
        const res = await axios.get('https://api-sachinsblog.herokuapp.com/api/posts/')
        setPosts(res.data)
        setLoading(false)
    }

 



    return (
        <div className="container my-5">

            <div className="mb-5">
                <div class="row">
                    <div class="col-12 mb-3">
                        <h5>Latest Posts</h5>
                    </div>

                    <PostCard 
                        posts={currentPosts}
                        loading={loading}
                    />

                    <div class="col-12 mt-4 text-center">
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                        />  
                    </div>
   
                </div>
            </div>
            
        </div>
    )
}

export default BlogContainer