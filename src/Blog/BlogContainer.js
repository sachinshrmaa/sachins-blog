import axios from 'axios'
import React, { useEffect, useState} from 'react'
import moment from "moment";


import Pagination from '../Components/Pagination'
import Newsletter from '../Components/Newsletter'



const BlogContainer = () => {

    const[posts, setPosts] = useState([])
    const[loading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(7);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('https://6087ae55a3b9c200173b8710.mockapi.io/api/posts')
            setPosts(await res.data);
            setLoading(false)
        }
        fetchPosts()
    }, []);


    const truncatePost = (word) => {
        if (word)
            return word.slice(0, 100)+ "...";
        return '';
    }

    const cardStyle = {
        latest : {
            width: "100%",
        },

        old : {
            width: "18rem",
        }
    }

    const displayPosts = () =>{
        return(currentPosts.map((post, index) => {
            return(
                <div className={index === 0 ? 'col-12 mb-5' : 'col-md-4 mb-4'}>
                    <div className="card border-0">
                        {index === 0 ? 
                            <a href={`/${post.slug}`} className='text-decoration-none text-dark'>
                                <div class="row g-0">
                                    <div class="col-md-6">
                                        <img src={post.thumbnail} alt={post.title} class="img-fluid rounded-start" />
                                    </div>
                                    <div class="col-md-6 align-self-center ps-md-3">
                                        <div class="card-body ">
                                            <h1 class="card-title featured-post">{post.title} </h1>
                                            <div dangerouslySetInnerHTML={{__html: truncatePost(post.content)}} />
                                            <p class="card-text"><small class="text-muted"> {moment(post.timestamp).format('MMMM D, YYYY')} </small></p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        : 
                            <a href={`/${post.slug}`} className='text-decoration-none text-dark'>
                                <img src={post.thumbnail} class="card-img-top" alt={post.title} />
                                <div class="card-body">
                                    <h5 class="card-title">{post.title} </h5>
                                    <div dangerouslySetInnerHTML={{__html: truncatePost(post.content)}} />
                                    <p class="card-text"><small class="text-muted"> {moment(post.timestamp).format('MMMM D, YYYY')} </small></p>
                                </div>
                            </a>
                        }
                    </div>
                </div>
            )
        }))
    }



    return (
        <div className="container mt-5">

            <div className="row">
                {loading ? <p className="my-5 text-center">loading...</p> : displayPosts()}

                <div class="col-12 mt-4 text-center">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                    />  
                </div>
            </div> 

            <Newsletter />

        </div>
    )
}

export default BlogContainer