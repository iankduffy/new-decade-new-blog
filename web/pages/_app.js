import App from 'next/app'
import Layout from '../components/layout'
import { initGA, logPageView } from "../components/googleAnalytics.js"
import { useEffect } from 'react'


const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
      logPageView(window.location.pathname);
    }
  }, [])

  return (
    < > 
      {/* <Layout > */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </ >
  )
}

export default MyApp