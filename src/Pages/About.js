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

            
            
            <h3 class="my-4">About Me</h3>
            <p>My name is Sachin Sharma and I'm a Bachelor's undergrad computer science student and I spend my free time reading books, writing journals, trying to design fun software, and explore new stuffs.</p>

            <div class="py-5">
                <h3 class="mb-4">Sachins Blog</h3>
                
                <p>C Wright Mills the great sociologist, once said -- As a social scientist, you have to capture what you experience and sort it out; only in this way can you hope to use it to guide and test your reflection, and in the process shape yourself as an intellectual craftsman. But how can you do this? One answer is: you must set up a blog!</p>

                <p>Actually, he called it a “file” instead of a blog, but the point remains the same: becoming a scientific thinker requires practice and writing is a powerful aid to reflection.</p>

                <p>So that’s what Sachins blog is. I write here about thoughts I have, things I’m working on, stuff I’ve read, experiences I’ve had, and so on. Whenever a thought crystalizes in my head, I type it up and post it here.</p>

                <p>I don’t consider this writing, I consider this thinking. I like sharing my thoughts and I like hearing yours too. ( <i><a href="https://twitter.com/sachinshrmaa">Twitter</a> is where you can find me </i>)</p>

                <p>In case you were wondering, this site is:</p>
                
                <ul>
                    <li>Designed and coded by Sachin on a Linux</li>
                    <li>Coded with Visual Studio Code</li>
                    <li>Built with React and Django REST Framework</li>
                    <li>Hosted on Vercel and Heroku</li>
                </ul>
            </div>

            <div>
                <h3 class="mb-4">What inspires me?</h3>
                <p>I feel very lucky to get to connect with so many extraordinary people. Whenever I have the chance, I set aside a few minutes to share what I’m learning here on the Sachins Blog. Thanks for reading.</p>
                <p>For comments or questions, feel free to ask me on <a href="https://twitter.com/sachinshrmaa">Twitter</a> or via email by going to the “Contact” link at the bottom of the page (I respond to every email/tweets I get).</p>
                    
            </div>
                
        </div>
    </div>
    )
}
 
export default About