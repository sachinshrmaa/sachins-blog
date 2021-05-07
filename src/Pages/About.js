import React from 'react'
import Newsletter from '../Components/Newsletter'

const About = () => {
    return (
        <div className="container my-5">
            <div className="col-md-8 m-auto">
                <h4 className="mb-4">About Me</h4>
                <p>If you are reading this, thanks for being here - My name is Sachin Sharma and I'm a final year computer science student by day and a curious boy by night ( who loves to read, write, travel and explore stuffs).</p>
                

                <h4 className="my-4">Sachins Blog</h4>
                <p>This is the place where I document everything and share it with the world.</p>

                <p>In case you were wondering, this site is:</p>
                <ul>
                    <li>Designed and coded by Sachin on a Linux in India</li>
                    <li>Coded with Visual Studio Code</li>
                    <li>Built with React and Django REST Framework</li>
                    <li>Hosted on Vercel and AWS</li>
                </ul>

                <h4 className="my-4">What inspires me?</h4>
                <p>I feel very lucky to get to connect with so many extraordinary people. Whenever I have the chance, I set aside a few minutes to share what I’m learning here on the Sachins Blog. </p>

                <p>For comments or questions, feel free to ask me on <a href="https://twitter.com/sachinshrmaa/">Twitter</a> or via email by going to the “Contact” link at the bottom of the page</p>


            </div>

            <div className="mt-5">
                <Newsletter />
            </div>
                        
        </div>
    )
}
 
export default About