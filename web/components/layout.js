import Head from 'next/head'
import '../stylesheets/styles.scss'

import Nav from '../components/nav'
import { initGA, logPageView } from "../components/googleAnalytics.js"
import { useEffect } from 'react'

export default ({ children, title = 'My Blog | Ian Duffy |  Web Developer', desc = "Web Developer: What Do I Know? Do I Know Things?? Let's Find Out!" }) => {
  
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
      logPageView(window.location.pathname);
    }
  }, [])

  return (

    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name="description" content={desc}/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name="theme-color" content="#223a57"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={desc}/>
        <meta property="og:image" content="https://www.iankduffy.com/iankduffy-socialcard.jpg"/>
        <meta property="og:url" content="https://blog.iankduffy.com/"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={desc}/>
        <meta name="twitter:image" content="https://www.iankduffy.com/iankduffy-socialcard.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image:alt" content={title}/>
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      </Head>
      <div className="u-bg-grey">
        <Nav />
        <main>
        {children}
        </main>
      </div>
    </div>
  )
}