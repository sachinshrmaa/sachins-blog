
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from '../components/BlogCard'
import LatestPost from '../components/LatestPost';


const graphcms = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/clazncmxj1wfm01uh70pq8gya/master"
);


const QUERY = gql`
  {
    posts {
      id
      title
      slug
      date
      excerpt
      coverImage{
        url
      }
    }
  }
`;


export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}


export default function Home({posts}) {
  return (
    <div className="container">
      <Head>
        <title>Sachins Blog</title>
        <meta name="description" content="The Blog of Sachin Sharma" />
        <link rel="icon" href="/sachinsblog.png" />
      </Head>
      
      <main>
          <div className="row">

            {posts.map((post, index) =>{return(
                <div className={index === 0 ? 'col-12 mb-5' : 'col-md-4 mb-4'}>
                
                  {index === 0 ?
                    <LatestPost
                      title={post.title}
                      date={post.date}
                      excerpt={post.excerpt}
                      key={post.id}
                      slug={post.slug}
                      coverImage={post.coverImage}
                    />
                  :
                    <BlogCard
                      title={post.title}
                      date={post.date}
                      excerpt={post.excerpt}
                      key={post.id}
                      slug={post.slug}
                      coverImage={post.coverImage}
                    />
                  }
              
                </div>
            )})}

          
           
          </div>

        
      </main>
   
    </div>
  )
}
