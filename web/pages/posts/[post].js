import { useRouter } from 'next/router'
import client from '../../client'
import '../../stylesheets/styles.scss'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'

const Post = (props) => {
  // const router = useRouter()
  // const { pid } = router.query

  // console.log({router})
  console.log({props})



  const { 
    title = 'Missing title', 
    name = 'Missing name', 
    categories } = props

  return(
    <div>
      <div className="col-12 col-5@lg">{title}</div>
      <div className="col-12 col-5@lg">{name}</div>

      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

Post.getInitialProps = async function (context) {

  console.log({context})
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}
export default Post