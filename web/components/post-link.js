import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import client from '../client'
import { truncate } from '../lib/truncate'

const PostLink = ({props}) => {  
  const { post, title, summary, imageUrl, tagline} = props
  // console.log({props})
  
  const desc = truncate(tagline, 250)

  return (
    <div className="col-4@md col-12">
      <Link href={{pathname: "/posts/[post]"}} as={`/posts/${post.current}`} >
        <a className={`c-project`}>
          <div className="c-project__image u-mar-b-md">
              <img src={imageUrl ? imageUrl : "/slash.jpg"} lazy="true" alt={title ? title : "code on the screen"} />
          </div>
          <div className="u-pad-h-sm u-pad-b-md">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <button className="c-project__btn">Read Blog</button>
        </a>
      </Link>
    </div>
  )
}

export default PostLink