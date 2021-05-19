import axios from 'axios'
import React, { useEffect, useState} from 'react'


import Pagination from '../Components/Pagination'
import PostCard from './PostCard';
import Newsletter from '../Components/Newsletter'
import RelatedPosts from './RelatedPosts';



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

                    <Newsletter />

                </div>
            </div>

            <div class="row my-5 py-3">

                <div class="row d-flex mb-4">
                    <div class="d-flex justify-content-between m-0">
                        <h5>Personal</h5>
                        <a href="#" class="text-decoration-none">See all &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></a> 
                    </div>
                </div>

                <RelatedPosts 
                    posts={posts} 
                    category={"Personal"}
                    loading={loading}
                    />

            </div>

            <div class="row my-5 py-3">

                <div class="row d-flex mb-4">
                    <div class="d-flex justify-content-between m-0">
                        <h5>Climate Change</h5>
                        <a href="#" class="text-decoration-none">See all &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg></a> 
                    </div>
                </div>

                
                <RelatedPosts 
                    posts={posts} 
                    category={"Climate Change"}
                    loading={loading}
                />
                
            </div>
            
        </div>
    )
}

export default BlogContainer