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

                    <div className="col-xl-7 col-lg-6 col-sm-12 order-lg-1 order-2 py-2 align-self-center">
                        <h1 className="display-3 mb-3">Project 3.0</h1>
                        <p>A little place on Sachin's blog where you can find everything about Web 3.0 that Sachin knows and has been working on. </p>
        

                        <div id="revue-embed">
                            <form action="https://www.getrevue.co/profile/sachinshrmaa/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                                <input class="revue-form-field newsletter-input mb-3" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
                                <input type="submit" value="Join " name="member[subscribe]" id="member_submit" class="btn px-5 py-3" />
                                <p class="mt-4 text-muted"><small>No spam, unsubscribe anytime.</small></p>
                                <div class="revue-form-footer"> <small>By subscribing, you agree with Revue’s <a target="_blank" className='text-primary' href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" className='text-primary' href="https://www.getrevue.co/privacy">Privacy Policy</a>.</small> </div>
                            </form>
                        </div>

                    </div>


                    <div className="col-xl-5 col-lg-6 col-sm-12 d-flex align-items-center order-lg-2 p-2 order-1 my-2">
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