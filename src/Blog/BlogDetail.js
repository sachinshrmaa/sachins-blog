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
            
            <div class="col-md-8 m-auto py-5">

            { loading ? (
                  <div class="col-12 my-5 text-center">
                      <p className="post-body">loading ...</p>
                  </div>
              ):(
                  <div>
                     

                      {/* <img src="{post.thumbnail}" className="mb-md-5 post-thumbnail" alt="{post.thumbnail}" /> */}

                      <div class="col-md-10 m-auto">
                        <h1 class="my-4 post-title">{post.title}</h1>
                        <span class="text-muted post-meta">Published by Sachin Sharma on {moment(post.timestamp).format('MMMM D, YYYY')}</span>
                        
                        <div class="my-4 post-body">
                          <div className='post-body' dangerouslySetInnerHTML={sanitizeBody()} />              
                        </div>
                        

                        <div class="mt-md-5">
                            <a class="btn btn-primary px-3 border-0" href={`https://twitter.com/share?url=https://sachinsblog.in/${post.slug}`} target="blank">Twitter</a> &nbsp;
                            <a class="btn btn-primary px-3 border-0" href={`https://www.facebook.com/sharer/sharer.php?u=https://sachinsblog.in/${post.slug}`} target="blank">Facebook</a>
                        </div>
                      

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