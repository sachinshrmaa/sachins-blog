
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from '../components/BlogCard'



const graphcms = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/clb0gitqq2e9u01uhbpr0fck8/master"
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
            {posts.map((post) => (
              <BlogCard
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                key={post.id}
                slug={post.slug}
                coverImage={post.coverImage}
              />
            ))}
          </div>

        
      </main>
   
    </div>
  )
}
