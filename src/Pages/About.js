import React from 'react'
import { Helmet } from 'react-helmet'
import myPicture from './sachin.jpg'


const About = () => {
    return (
        <div class="col-md-6 m-auto col-11">
            <Helmet>
                <title>About - Sachins Blog</title>
                <meta
                    name="description"
                    content="About Sachin Sharma"
                />
            </Helmet>
            
            <div class="my-md-4 py-md-4 my-4 py-3">

                <figure>
                    <img src={myPicture} className="my-picture" alt="Sachins Blog" />
                    <figcaption className="text-center mt-2 text-muted"><small>me sitting on a railing in Kurseong, West Bengal (Feb, 2021)</small></figcaption>
                </figure>

                <h2 className="sub-heading">About</h2>
                <p>Hi, My name is Sachin and I'm an undergrad bachelor's student (computer science). I like to spend my free time reading books, writing journals, trying to design fun software, and explore new stuffs.</p>

                <h2 className="sub-heading mt-5">What Inpires me?</h2>
                <p>I feel very lucky to get to connect with so many extraordinary people. Whenever I have the chance, I set aside a few minutes to share what I’m learning here on the Sachins Blog. Thanks for reading.</p>
                <p> For comments or questions, feel free to ask me on <a href="http://twitter.com/sachinshrmaa" target='_blank'>Twitter</a> or via email by going to the “Contact” link at the bottom of the page (I respond to every email/tweets I get).</p>
                    
            </div>
        </div>
    )
}
 
export default About