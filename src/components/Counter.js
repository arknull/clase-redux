import React from 'react';
import '../styles/counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { aumentar, disminuir } from '../actions';

export const Counter = () => {
	const count = useSelector((state) => state.reducer.count);
	const dispatch = useDispatch();

	return (
		<section className="counter">
			<div className="counter__number">{count}</div>
			<button className="counter__button" onClick={() => dispatch(aumentar())}>
				Aumentar +
			</button>
			<button className="counter__button" onClick={() => dispatch(disminuir())}>
				Disminuir -
			</button>
		</section>
	);
};
