import React from 'react'

const Projects = () => {
    return (
        <div className="col-md-8 col-11 m-auto my-5">
            <h3>Projects</h3>
            <p>Some of the projects that I've made in the last couples of years on various fields.</p>

            <div className="row">
                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Data Science</h5>
                    <ul>
                        <li>WhatsApp Chat analysis using Python Pandas, Numpy, Matplotlib and Seaborn -- <a href="" target="blank">view notebook</a></li>
                        <li>Itlay Covid Data analysis using Python Pandas, Numpy, Matplotlib and Seaborn -- <a href="" target="blank">view notebook</a></li> 
                        <li>Credit Card fraud analysis using Python and machine learning -- <a href="" target="blank">view notebook</a></li>    
                    </ul>
                </div>

                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Web Development</h5>
                    <ul>
                        <li>Social Web app - Stipill using Python & Django </li>
                        <li>Image Compressor using React <a href="https://sachinshrmaa.github.io/react-image-compressor/" target="blank">live demo</a> </li>
                        <li>Online Community Forum using Django <a href="https://github.com/sachinshrmaa/community-forum" target="blank">view on github</a></li>
                    </ul>
                </div>

                <div className="col-md-6 mt-4 p-3">
                    <h5 className="mb-4">Publications</h5>
                    <ul>
                        <li>Online Community forum -- <a href="#" target="blank">view on google scholars</a> </li>
                    </ul>
                </div>
            </div>

          
  
        </div>
    )
}

export default Projects
