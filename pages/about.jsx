import Head from "next/head";


const About = () => {
    return (  
        <div className="col-md-6 m-auto col-11 my-5">
            <Head>
                <title>About | Sachins Blog</title>
                <meta name="description" content="I feel very lucky to get to onnect with so many extraordinary people." />
                <link rel="icon" href="/sachinsblog.png" />
            </Head>
      
      
            <h2 className="sub-heading">About</h2>
            <p>Hi, My name is Sachin and I'm an undergrad bachelor's student (computer science). I like to spend my free time reading books, writing journals, trying to design fun software, and explore new stuffs.</p>

            <h2 className="sub-heading mt-5">What Inpires me?</h2>
            <p>I feel very lucky to get to connect with so many extraordinary people. Whenever I have the chance, I set aside a few minutes to share what I’m learning here on the Sachins Blog. Thanks for reading.</p>
            <p> For comments or questions, feel free to ask me on <a href="http://twitter.com/sachinshrmaa" target='_blank'>Twitter</a> or via email by going to the “Contact” link at the bottom of the page (I respond to every email/tweets I get).</p>
                
        </div>
    );
}
 
export default About;