import { Helmet } from 'react-helmet';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PostCard from '../Blog/PostCard';

const Project3 = () => {

    const [loading, setLoading] = useState(false)
    
    const [posts, setPosts] = useState([])
    var loadingSpinner = <span>loading...</span>

    const fetchData = async () => {
        setLoading(true)
        const res = await axios.get(`https://api-sachinsblog.herokuapp.com/api/posts`)
        setPosts(res.data.filter(post => post.category === 'web3'))
        setLoading(false)
    }


    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div>

            <div className="py-5">
                <div className="row col-9 m-auto">

                    <div className="col-xl-5 col-lg-6 col-sm-12 order-lg-1 order-2 py-2 align-self-center">
                        <h1 className="display-3 mb-3">Project 3.0</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odio impedit inventore natus laborum doloribus, aliquam ea?</p>

                        <form action="#" className="row mt-5">
                            <div className="col-8">
                                <label for="inputPassword2" class="visually-hidden">Password</label>
                                <input type="email" class="form-control" id="inputPassword2" placeholder="Enter your email..." />
                            </div>

                            <div className="col-4">
                                <input type="button" value="I'm In" className="btn px-5" />
                            </div>
                    
                        </form>

                    </div>


                    <div className="col-xl-7 col-lg-6 col-sm-12 d-flex align-items-center order-lg-2 p-2 order-1 my-2">
                        <img src="./blockchain.png" alt="web 3.0" className='img-fluid'/>
                    </div>
                </div>
            </div>

            <div className='col-8 m-auto'>
                
                <div className='row'>
                    <PostCard 
                        posts={posts}
                        loading={loading}
                    />
                </div>

            </div>

        

            <Helmet>
                <title>Project 3.0 - Sachins Blog</title>
                <meta
                    name="description"
                    content="A project on Web 3.0 by Sachin"
                />
            </Helmet>

        </div>
    )
}

export default Project3