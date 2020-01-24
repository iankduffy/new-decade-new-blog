import ProfilePic from '../components/c-profile-pic'

const SplashScreen = () => (
  <div className="c-screen u-pad-h-md container__row--v-center u-dis-flex" id="home">
    	<div className="container container__row--v-center flex-column-tablet u-t-cen@lg u-transition-in"> 
				<div className="col-5@lg col-12 u-mar-r-md@md u-pad-v-md"><ProfilePic/></div>
				<div className="col-7@md col-12 container container__column">
					<h1>IAN DUFFY</h1>
          <p className="h2">Web Developer | Leeds</p>
					<div className="container container__row u-mar-v-md">
						<a className="c-btn col-5 u-mar-r-md u-stretch" href="/cv.pdf" target="_blank">My CV</a>
						<a className="c-btn col-5 u-mar-r-md u-stretch" href="https://github.com/iankduffy" target="_blank" rel="noopener">My Github</a>
					</div>
				</div>
			</div>
  </div>
)

export default SplashScreen
