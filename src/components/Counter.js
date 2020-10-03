import React from 'react';
import '../styles/counter.css';

export const Counter = () => {
	return (
		<section className="counter">
			<div className="counter__number">1</div>
			<button className="counter__button">Aumentar +</button>
			<button className="counter__button">Disminuir -</button>
		</section>
	);
};
