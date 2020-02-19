import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import { truncate } from '../lib/truncate'

const PostLink = ({props}) => {  
  const { post, title, summary, imageUrl, tagline} = props
  // console.log({props})
  
  const desc = truncate(tagline, 250)

  return (
    <div className="col-6@md col-12 u-mar-b-md">
      <Link href={{pathname: "/posts/[post]"}} as={`/posts/${post.current}`} >
        <a className={`c-project`}>
          <div className="c-project__image col-6">
            <div className="img" style={{backgroundImage: `url(${imageUrl ? imageUrl : "/slash.jpg"})`}}></div>
          </div>
          <div className="u-pad-h-sm u-pad-v-sm col-6">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostLink