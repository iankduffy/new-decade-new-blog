import Link from 'next/link'
import HomeIcon from './svg/home-icon'
import AboutIcon from './svg/about-icon'

const Nav = () => {

  return(
    <div className="o-header u-pad-h-sm">
      <Link href="/"><a className="o-header__logo"><img className="u-pad-h-sm" src="/Logo.svg" alt="ID logo"/></a></Link>
      <Link href="/"><a className="o-header__link"><HomeIcon/>Blog Home</a></Link>
      <a href="https://www.iankduffy.com/" className="o-header__link"><AboutIcon />My Website</a>
    </div>
  )
}

export default Nav
