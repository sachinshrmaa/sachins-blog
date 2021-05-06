import axios from 'axios'
import moment from 'moment'
import React, {useState, useEffect} from 'react'

import Newsletter from '../Components/Newsletter'



const BlogDetail = (props) => {

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const slug = props.match.params.id

        const fetchData = async () => {
            setLoading(true)
            const res = await axios.get(`https://api-sachinsblog.herokuapp.com/api/posts/${slug}`)
            setPost(res.data)
            setLoading(false)
        }
        fetchData()

    }, [props.match.params.id])
    

    // Sanitize Post body
    const sanitizeBody = () => {
        return {__html: post.content}
    };


    return (
        <div className="container">
            
            <div class="col-md-9 col-12 m-auto">

                { loading ? (
                        <div class="col-12 my-5 text-center">
                            <h5>loading ...</h5>
                        </div>
                    ):(
                        <div class="p-2 my-4">
                            {/* <img src={post.thumbnail} alt={post.title} class="mb-3 detail-post-thumbnail" /> */}
                            <h2>{post.title}</h2>
                            <p class="text-muted">Published by <b>Sachin Sharma</b> on {moment(post.timestamp).format('MMMM D, YYYY')}</p>
                            <a class="btn btn-sm btn-primary px-3" href={`https://twitter.com/share?url=https://sachinsblog.in/${post.slug}`} target="blank">Twitter</a> &nbsp;
                            <a class="btn btn-sm btn-primary px-3" href={`https://www.facebook.com/sharer/sharer.php?u=https://sachinsblog.in/${post.slug}`} target="blank">Facebook</a>
                            <div class="my-4">
                                <div className='post-body' dangerouslySetInnerHTML={sanitizeBody()} />
                            </div>
                        </div>
                    )
                }
                
            </div>


            <Newsletter />
        </div>
    )
}

export default BlogDetail
