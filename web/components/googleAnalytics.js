import ReactGA from "react-ga"
import { useEffect } from 'react'

const initGA = () => {
  ReactGA.initialize("UA-110561691-3")
}

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // console.log('echo')
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
      logPageView(window.location.pathname);
    }
  }, [])
}