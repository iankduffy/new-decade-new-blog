import { useRouter } from 'next/router'
import client from '../../client'
import '../../stylesheets/styles.scss'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import PostSplashScreen from '../../components/post-splash-screen'

const Post = (props) => {

  const { 
    title = 'Missing title', 
    authorName = 'Missing name', 
    categories, 
    imageUrl = "/slash.jpg", 
    body, 
    tagline = "" } = props

  return(
    <div>
      <PostSplashScreen title={title} authorName={authorName} imageUrl={imageUrl} tagline={tagline}/>

      <div className="col-12 col-8@lg container u-pad-v-lg u-pad-h-md">
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />
      </div>
    </div>
  )
}

Post.getInitialProps = async ({query}) => {

  const request = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "authorName": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    "imageUrl": mainImage.asset->url,
    body, 
    tagline
  }`

  // It's important to default the slug so that it doesn't return "undefined"
  const slug = query.slug ? query.slug : query.post
  console.log(`Here ${query.slug} ${query.post}`)

  return await client.fetch(request, { slug })
}
export default Post