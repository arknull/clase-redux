import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemon } from '../actions/pokemonactions';
import '../styles/searchbar.css';

export const SearchBar = () => {
	const dispatch = useDispatch();
	const [poke, setpoke] = useState('');

	const handleInput = (e) => {
		setpoke(e.target.value);
	};
	dispatch(getPokemon(poke));

	return (
		<section className="searchbar">
			<h3 className="searchbar__title">Busca un pokemon</h3>
			<input
				className="searchbar__input"
				placeholder="id o nombre"
				type="text"
				onChange={handleInput}
			/>
		</section>
	);
};
