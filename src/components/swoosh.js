import React, { useEffect } from 'react'
import {dotsMovement} from '../assets/js/dots.es.js';

const debounce = (func, wait) => {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			timeout = null;
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};
  
const Swoosh = (props) => {
	useEffect(() => {
        let move = document.getElementById(props.id);
		debounce(dotsMovement(move, [props.startEl, props.endEl], [-6, 360], 1000, "cubicX", ["#009de4", "#06f3a0", "#f30659"]), 100);       
    });    
    return (
			<div className="col-12">
				<div id={ props.id }>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>						
			</div>
	)
}
export default Swoosh;