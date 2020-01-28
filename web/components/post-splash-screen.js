
const PostSplashScreen = ({title, authorName, imageUrl}) => (
  <div className="c-screen u-pad-h-md container__row--v-center u-dis-flex" style={{backgroundImage: `url(${imageUrl})`}}>
    	<div className="container container__row--v-center flex-column-tablet  u-transition-in"> 
				<div className="col-7@md col-12 container container__column u-t-cen">
					<h1>{title}
					</h1>
					<p className="h2">A Web Developer: What Do I Know? Do I Know Things?? Let's Find Out!</p>
				</div>
			</div>
  </div>
)

export default PostSplashScreen
