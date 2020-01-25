import { useRouter } from 'next/router'
import client from '../../client'
import '../../stylesheets/styles.scss'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'

const Post = (props) => {
  const router = useRouter()
  const { pid } = router.query

  const { title = 'Missing title', name = 'Missing name', categories } = props


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

      {/* <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      /> */}

    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title
}`

Post.getInitialProps = async ({ query: { slug } }) => {
  const document = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name
  }`, { slug })
  return document
}
export default Post