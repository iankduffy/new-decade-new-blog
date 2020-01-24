import Link from 'next/link'
// import HomeIcon from './svg/home-icon'
// import AboutIcon from './svg/about-icon'
// import WorkIcon from './svg/work-icon'
// import CodeIcon from './svg/code-icon'

const Nav = () => {

  let scrollTo = (e, target) => {
    e.preventDefault()
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth'
   })
  }

  return(
    <div className="o-header u-pad-h-sm">
      <Link href="#"><a className="o-header__logo" onClick={(e) => scrollTo(e, "home")}><img className="u-pad-h-sm" src="/Logo.svg" alt="ID logo"/></a></Link>
    </div>
  )
}

export default Nav
