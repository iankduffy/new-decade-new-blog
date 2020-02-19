// import { useRouter } from 'next/router'
import client from '../../client'
import '../../stylesheets/styles.scss'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import PostSplashScreen from '../../components/post-splash-screen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Layout from '../../components/layout'


const Post = (props) => {

  const { 
    title = 'Missing title', 
    authorName = 'Missing name', 
    categories, 
    imageUrl = "/slash.jpg", 
    body, 
    tagline = "" } = props

  return(
    <Layout title={`${title} | IanKDuffy Blog`}>
      <div>
        <PostSplashScreen title={title} authorName={authorName} imageUrl={imageUrl} tagline={tagline}/>

        <article className="col-12 container container__row u-pad-v-lg u-pad-h-md">
          <BlockContent
            blocks={body}
            imageOptions={{ w: 800, h: 240, fit: 'max' }}
            {...client.config()}
            className="col-8@lg"
          />
          <div className="col-12 col-4@lg u-pad-l-md u-pad-l-0@lg u-pos-sticky" >
            <div className="u-bor-primary u-pad-v-sm u-pad-h-md c-author">
              <div className="c-profile-pic c-profile-pic__mini">
              </div>
              <p>Hello I’m Ian Duffy, Web Developer living in Leeds, UK</p>
              <p>Enjoys designing and building websites, using multiple languages and tools. Currently working with Ruby on Rails site with ES6 and SASS, projects using Javascript, ReactJS and other frameworks.</p>
              <p>Previously worked as a designer using the Adobe Creative Cloud, as well done bits of animation, 3D modelling and game development.</p>
              <div className="container__row container--space-evenly u-mar-t-md">
                <a className="o-link" href="https://github.com/iankduffy" aria-label="My Github" target="_blank" rel="noopener"><FontAwesomeIcon icon={faGithubSquare} /></a>
                <a className="o-link" href="https://www.linkedin.com/in/iankduffy" aria-label="My Linkedin" target="_blank" rel="noopener"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="o-link" href="https://www.instagram.com/duffeh_leeds/" aria-label="My Instagram" target="_blank" rel="noopener"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
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