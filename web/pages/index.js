import '../stylesheets/styles.scss'
import client from '../client'
import groq from 'groq'
import PostLink from '../components/post-link'

const Index = (props) => {
  console.log(props)

  return (
    <div>
      <div className="col-12 col-5@lg">My Blog</div>
        {props.posts.map((post) => { return <PostLink props={post} /> } )}
    </div>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
  *[_type == "post"]|order(publishedAt desc)
  `)
})


export default Index