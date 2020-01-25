import Link from 'next/link'

const FullWidthLink = () => {
  return (
    <div className="c-full-width flex-column-mobile o-flex-al-stretch">
      <Link href={`/`}>
        <a className={`col-6@md col-12 container__row c-full-width--image`}>
          <img className="col-12 u-animate" src="/slash.jpg" lazy="true" />
        </a>
      </Link>
      <div className="col-5@md col-12 u-pad-h-md container__column u-pad-v-md u-font-white">
        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
        <Link href={`/`}>
          <a className="col-12 c-btn u-mar-v-md">
            Blog Post Here
          </a>
        </Link>
      </div>
    </div>
  )
}
  
export default FullWidthLink;