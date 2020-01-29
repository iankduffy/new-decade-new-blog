
const PostSplashScreen = ({title, authorName, imageUrl, tagline}) => (
  <div className="c-screen u-pad-h-md container__row--v-center u-dis-flex" style={{backgroundImage: `url(${imageUrl})`}}>
    	<div className="container container__row--v-center flex-column-tablet  u-transition-in"> 
				<div className="col-7@md col-12 container container__column u-t-cen">
					<h1>{title}</h1>
					<p className="h2">{tagline}</p>
				</div>
			</div>
  </div>
)

export default PostSplashScreen
