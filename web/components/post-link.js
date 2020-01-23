import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'

const PostLink = ({props}) => {  
  const { slug, title, summary} = props

  return (
    <Link href={{pathname: "/posts/[slug]"}} as={`/posts/${slug.current}`} >
      <a>
        <h1>{title}</h1>
        <BlockContent
          blocks={summary}
          {...client.config()}
        />
      </a>
    </Link>
  )
}

export default PostLink