import client from '../client'
import groq from 'groq'
import Layout from '../components/layout'
import PostLink from '../components/post-link'
import SplashScreen from '../components/splash-screen'

const Index = (props) => {
  console.log(props)

  return (
    <div>
      <Layout >
        <SplashScreen />
        <div className="col-12 col-5@lg">My Blog</div>
          {props.posts.map((post) => { return <PostLink props={post} /> } )}
      </Layout>
    </div>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
  *[_type == "post"]|order(publishedAt desc)
  `)
})


export default Index