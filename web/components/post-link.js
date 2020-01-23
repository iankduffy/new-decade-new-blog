import Link from 'next/link'

const PostLink = (props) => {  
  const { slug, title } = props.props

  console.log(slug)
  return (
    <Link href={{pathname: "/posts/[slug]"}} as={`/posts/${slug.current}`} >
      <a>
        <h1>{title}</h1>
      </a>
    </Link>
  )
}

export default PostLink