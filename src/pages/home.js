import React from 'react';
import '../assets/css/application.css';
import {dotsMovement} from '../assets/js/dots.js';
import {scrollBG} from '../assets/js/colorChanger.js';
import quest from '../assets/images/quest.png';
import daedalus from '../assets/images/daedalus.png';
import anime from '../assets/anime/lib/anime.es.js';
import {animateLI} from '../assets/js/listItem.js';

class Home extends React.Component {

	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		anime({
			targets: ".throbber-inner",
			scale: .5,
			border: "2px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500,
		})
		scrollBG(".color-change-bg", ["#9932CC", "#4B0082", "#9370DB", "#8068D8"], 3000)

		let dotsRTL = document.getElementById("mv1");
		let dotsLTR = document.getElementById("mv2");

		dotsMovement(dotsRTL, ["first", "second"], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]);
		dotsMovement(dotsLTR, ["third", "fourth"], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]);
		animateLI()

	}
	render(){
		return (
			<article id="main" className="overflow-hidden">
			<div class="pb-5 color-change-bg overflow-hidden">
				<div class="pb-5 container">
					<div class="row align-items-center" id="container">

						<div class="col-12">
							<div class="purple-gradient mt-5 d-flex flex-column p-5 text-center overflow-visible" id="parallaxHeader">
								<h1 class="white qHeader">
									Quest: A Creative Landing Page Theme For Easy Use
								</h1>
								<h5 class="white qHeader2">
									Designed By Project Icarus
								</h5>
								<div class="my-4 dark">
									<a class="btn btn-lg btn-primary btn-purple-basic" href="https://github.com/icarus612/questLandingPage">Visit Github</a>

									<a class="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://www.projecticarus.net">Main Site</a>
								</div>

							</div>
							<div class="throbber-bottom right-m" id="first">
								<div class="throbber-inner"></div>
							</div>
						</div>

						<div class="col-12">
							<div id="mv1">
								<div class="dot"></div>
								<div class="dot"></div>
								<div class="dot"></div>
								<div class="dot"></div>
								<div class="dot"></div>
							</div>
						</div>

						<div class="col-xs-12 col-lg-6">
							<div class="throbber-top left-m" id="second">
								<div class="throbber-inner"></div>
							</div>
							<div class="purple-gradient d-flex flex-column p-5 text-left overflow-visible">
									<h2 class="white">
										JavaScript 
									</h2>
									<h5 class="my-3 white">
										JavaScript is amazing for so many reasons, and if you don,t believe me, look uo "how to disable Javascript in my browser", and play around online for 10-20 minutes. (Most pages wont even let you view them without JS enabled)
									</h5>
									<h5>
										Most of my pages are made to show off JavaScript animation, that are fun, reactive and interactive with the user.
									</h5>
				
							</div>
							<div class="throbber-bottom left-m" id="third">
								<div class="throbber-inner"></div>
							</div>
						</div>

						<div class="col-xs-12 col-lg-6">
							<div class="hero hero-video intro">

								<!-- Spot for video or link -->

							</div>
						</div>

						<div class="col-12">
							<div id="mv2">
								<div class="dot"></div>
								<div class="dot"></div>
								<div class="dot"></div>
								<div class="dot"></div>
								<div class="dot"></div>
							</div>						
						</div>

						<div class="d-none d-md-block col-md-4">
							<div class="order-lg-1 mt-5 mt-lg-0 mx-lg-5"></div>
						</div>

						<div class="col-sm-12 col-md-8">
							<div class="throbber-top right-m"id="fourth">
								<div class="throbber-inner"></div>
							</div>
							<div class="purple-gradient order-lg-2 d-flex flex-column p-5 text-left overflow-visible">
								<h2 class="white">
									Animations with anime.js
								</h2>
								<h5>
									This is whats going on behind the scenes with the dots. (to see the dots animation repo <a target='_blank' href="https://github.com/icarus612/dots">click here</a>)
								</h5>
								<code>
										let animation = (e, t, svg, mvX, mvY, crv, clr, d) => {<br />
											<span class="pl-4">let animate = anime.timeline({}).add({<br /></span>
												<span class="pl-5">targets: svg.children[e],<br /></span>
												<span class="pl-5">translateX: translateX(mvX, t, crv),<br /></span>
												<span class="pl-5">translateY: translateY(mvY, t, crv),<br /></span>
												<span class="pl-5">fill: fillColor(clr, t, svg),<br /></span>
												<span class="pl-5">complete: function(anim){<br /></span>
												<span class="pl-5"><span class="pl-4">animation(e, t, svg, mvX, mvY, crv, clr, 0)<br /></span></span>
												<span class="pl-5">},<br /></span>
												<span class="pl-4">}, d);<br /></span>
												<span class="pl-4">return animate;<br />	</span>								
										}
								</code>
								<p>(I'm using a modified version here to dynamically change the distance if the page size changes. (try it out)</p>
							
							</div>
							<div class="throbber-bottom right-m" id="fifth">
								<div class="throbber-inner"></div>
							</div>
						</div>

						<div class="col-12">
								<div id="mv3">
									<div class="dot"></div>
									<div class="dot"></div>
									<div class="dot"></div>
									<div class="dot"></div>
									<div class="dot"></div>
								</div>			
						</div>

						<div class="col-xs-12 col-md-8 col-lg-6">
							<div class="throbber-top left-m" id="sixth">
								<div class="throbber-inner"></div>
							</div>
							<div class="purple-gradient d-flex flex-column p-5 text-left overflow-visible">
								<h2 class="white">
									Use as you wish 
								</h2>
								<h5 class="my-3 pb-3 white">
									This landing page is avalible for download (obviously), and others like it. Check out <a target='_blank' href='https://angel-icarus.netlify.com'>this page</a> for more cool js anamations in action. 
									The link to either github is here:
								</h5>
								<div class="my-4 text-center dark">
										<a class="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://github.com/icarus612/questLandingPage">Quest</a>
	
										<a class="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://github.com/icarus612/angelicarus">Icarus</a>
									</div>
							</div>
						</div>

					</div>
				</div>
			</div>




			<section class="py-5 position-relative overflow-hidden pt-5" id='contactMe'>
				<div class="container">
					<div class="col-12 py-md-3 text-center text-white my-4">
						<h3 class="my-4 dark">
							Need web development? Check out my website! 
						</h3>
						<div class="d-flex flex-column flex-md-row justify-content-between align-items-around">
							<div class="my-4 col-12 dark">
								<a class="btn btn-lg btn-primary btn-purple" href="https://github.com/icarus612/questLandingPage">Visit Github</a>

								<a class="btn btn-lg btn-primary btn-purple" href="https://www.projecticarus.net">See Site</a>
							</div>
						</div>
					</div>

				</div>
			</section>
				 
			
		
			</article>
		);
	}
  
}

export default Home;
