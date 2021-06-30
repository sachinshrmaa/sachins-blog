import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Newsletter from '../Components/Newsletter'
import Pagination from '../Components/Pagination'
import PostCard from './PostCard';


const BlogSearch = () => {

    const [query, setQuery] = useState('')
    const [searched, setSearched] = useState([])
    const [loading, setLoading] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = searched.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const handleSearch = async () =>{
        setLoading(true)
        const res = await axios.get(`https://api.sachinsblog.in/api/posts?search=${query}`)
        setSearched(res.data)
        setLoading(false)
    }


    // filter 
    
    const [posts, setPosts] = useState([])
    const [category, setCategory] = useState('')
    var loadingSpinner = <span>loading...</span>

    const fetchData = async () => {
        setLoading(true)
        const res = await axios.get(`https://api.sachinsblog.in/api/posts`)
        setPosts(res.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    const uniqueItems = (x, i, array) => array.indexOf(x) === i;
    const postCategories = posts.map(post => post.category).filter(uniqueItems)
    postCategories.sort()


    const filterBtn = (postCategories, setCategory) => {
        return(postCategories.map(category => (
            <li><a class="dropdown-item" key={category} onClick={() => handleFiltering(category)}> { loading ? loadingSpinner : category} </a></li> 
        )))
    }

    
    const handleFiltering = async (category) => {
        setCategory(category)
        setSearched(posts.filter(post => post.category === category))
    }





    return (
        <div className="my-5 container">

           <Helmet>
                <title>Search - Sachins Blog</title>
                <meta
                    name="description"
                    content="Search Sachins blogs"
                />
            </Helmet>

            <div class="bg-white p-4 rounded">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <h4 class="mb-3">Search</h4>
                        <input type="text" class="search-inp border-0 rounded px-2 bg-light" placeholder="Search Sachins Blog" onChange={(e) => setQuery(e.target.value)} /> &nbsp;
                        <button class="btn text-white px-3 py-2 mt-2 mt-md-0" onClick={handleSearch}>Search</button>
                    </div>

                    <div class="col-md-2 col-12 mt-4 mt-md-0 pl-md-5">
                        <h4 class="mb-3">Filter</h4>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {filterBtn(postCategories, setCategory)}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


            <div className="my-5">
                <div class="row">

                    <PostCard 
                        posts={currentPosts}
                        loading={loading}
                    />

                    <div class="col-12 mt-4 text-center">
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={searched.length}
                            paginate={paginate}
                        />  
                    </div>

                </div>
            </div>

            <Newsletter />


        </div>
    )
}

export default BlogSearch