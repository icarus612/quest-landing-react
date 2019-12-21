import React, { useEffect } from 'react';
import '../assets/css/application.css';
import anime from '../assets/anime/lib/anime.es.js';

export const Throbber = (props) => {
    let classes;
    if (props.bottom) classes = 'throbber-bottom ';
    if (props.top) classes = 'throbber-top ';
    classes += `${props.mobile}-m`; 
	useEffect(() => {
        anime({
			targets: `.throbber-inner`,
			scale: .5,
			border: "2px",
			easing: "easeInCubic",
			direction: "alternate",
			loop: true,
			duration: 1500
		});
	}, []);
    return (
        <div className={ classes } id={ props.id }>
            <div className="throbber-inner"></div>
        </div>
    )
}
export default Throbber;
