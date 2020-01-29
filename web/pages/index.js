import client from '../client'
import groq from 'groq'
import PostLink from '../components/post-link'
import SplashScreen from '../components/splash-screen'
import AboutMe from '../components/about-me'
import FullWidthLink from '../components/full-width-link'


const Index = ({posts}) => {
  // console.log(props)

  return (
    <div>
      <SplashScreen />
      <AboutMe/>

      <div className="col-12 u-pad-v-md container">
        <h2>All Blog Posts</h2>
        <div className="container container__row u-pad-h-0">
          { posts.map((post, key) => { return <PostLink key={key} props={post} /> })}
        </div>
      </div>
    </div>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
  *[_type == "post"]|order(publishedAt desc){
      title, 
      "post": slug,
      "imageUrl": mainImage.asset->url, 
      summary, 
      tagline
  }
  `)
})




export default Index