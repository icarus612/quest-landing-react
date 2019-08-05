import React from 'react';
import '../assets/css/application.css';
import {dotsMovement} from '../assets/js/dots.js';
import {scrollBG} from '../assets/js/colorChanger.js';

import anime from '../assets/anime/lib/anime.es.js';

class Home extends React.Component {

	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		scrollBG(".color-change-bg", ["#134a89", "#6D289A", "#1ea185", "#134a89" ], 3500)

		anime({
			targets: ".throbber-inner",
			scale: .5,
			border: "2px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500,
		})
		let dotsRTL = document.getElementById("mv1");
		let dotsLTR = document.getElementById("mv2");
		let dotsLTR2 = document.getElementById("mv3");
		dotsMovement(dotsRTL, ["first", "second"], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]);
		dotsMovement(dotsLTR, ["third", "fourth"], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]);
		dotsMovement(dotsLTR2, ["fifth", "sixth"], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]);

	}
	render(){
		return (
			<article id="main" className="overflow-hidden">
			<div className="pb-5 color-change-bg overflow-hidden">
				<div className="pb-5 container">
					<div className="row align-items-center" id="container">

						<div className="col-12">
							<div className="purple-gradient mt-5 d-flex flex-column p-5 text-center overflow-visible" id="parallaxHeader">
								<h1 className="white qHeader">
									Quest: A Creative Landing Page Theme For Easy Use
								</h1>
								<h5 className="white qHeader2">
									Designed By Project Icarus
								</h5>
								<div className="my-4 dark">
									<a className="btn btn-lg btn-primary btn-purple-basic" href="https://github.com/icarus612/questLandingPage">Visit Github</a>

									<a className="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://www.projecticarus.net">Main Site</a>
								</div>

							</div>
							<div className="throbber-bottom right-m" id="first">
								<div className="throbber-inner"></div>
							</div>
						</div>

						<div className="col-12">
							<div id="mv1">
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
							</div>
						</div>

						<div className="col-xs-12 col-lg-6">
							<div className="throbber-top left-m" id="second">
								<div className="throbber-inner"></div>
							</div>
							<div className="purple-gradient d-flex flex-column p-5 text-left overflow-visible">
									<h2 className="white">
										JavaScript 
									</h2>
									<h5 className="my-3 white">
										JavaScript is amazing for so many reasons, and if you don,t believe me, look uo "how to disable Javascript in my browser", and play around online for 10-20 minutes. (Most pages wont even let you view them without JS enabled)
									</h5>
									<h5>
										Most of my pages are made to show off JavaScript animation, that are fun, reactive and interactive with the user.
									</h5>
				
							</div>
							<div className="throbber-bottom left-m" id="third">
								<div className="throbber-inner"></div>
							</div>
						</div>

						<div className="col-xs-12 col-lg-6">
							<div className="hero hero-video intro">


							</div>
						</div>

						<div className="col-12">
							<div id="mv2">
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
							</div>						
						</div>

						<div className="d-none d-md-block col-md-4">
							<div className="order-lg-1 mt-5 mt-lg-0 mx-lg-5"></div>
						</div>

						<div className="col-sm-12 col-md-8">
							<div className="throbber-top right-m"id="fourth">
								<div className="throbber-inner"></div>
							</div>
							<div className="purple-gradient order-lg-2 d-flex flex-column p-5 text-left overflow-visible">
								<h2 className="white">
									Animations with anime.js
								</h2>
								<h5>
									This is whats going on behind the scenes with the dots. (to see the dots animation repo <a target='_blank' href="https://github.com/icarus612/dots">click here</a>
								</h5>
							
								<p>I'm using a modified version here to dynamically change the distance if the page size changes. (try it out)</p>
							
							</div>
							<div className="throbber-bottom right-m" id="fifth">
								<div className="throbber-inner"></div>
							</div>
						</div>

						<div className="col-12">
								<div id="mv3">
									<div className="dot"></div>
									<div className="dot"></div>
									<div className="dot"></div>
									<div className="dot"></div>
									<div className="dot"></div>
								</div>			
						</div>

						<div className="col-xs-12 col-md-8 col-lg-6">
							<div className="throbber-top left-m" id="sixth">
								<div className="throbber-inner"></div>
							</div>
							<div className="purple-gradient d-flex flex-column p-5 text-left overflow-visible">
								<h2 className="white">
									Use as you wish 
								</h2>
								<h5 className="my-3 pb-3 white">
									This landing page is avalible for download (obviously), and others like it. Check out <a target='_blank' href='https://angel-icarus.netlify.com'>this page</a> for more cool js anamations in action. 
									The link to either github is here:
								</h5>
								<div className="my-4 text-center dark">
										<a className="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://github.com/icarus612/questLandingPage">Quest</a>
	
										<a className="btn btn-lg btn-primary btn-purple-basic" target='_blank' href="https://github.com/icarus612/angelicarus">Icarus</a>
									</div>
							</div>
						</div>

					</div>
				</div>
			</div>




			<section className="py-5 position-relative overflow-hidden pt-5" id='contactMe'>
				<div className="container">
					<div className="col-12 py-md-3 text-center text-white my-4">
						<h3 className="my-4 dark">
							Need web development? Check out my website! 
						</h3>
						<div className="d-flex flex-column flex-md-row justify-content-between align-items-around">
							<div className="my-4 col-12 dark">
								<a className="btn btn-lg btn-primary btn-purple" href="https://github.com/icarus612/questLandingPage">Visit Github</a>

								<a className="btn btn-lg btn-primary btn-purple" href="https://www.projecticarus.net">See Site</a>
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
