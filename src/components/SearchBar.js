import React from 'react';
import '../styles/searchbar.css';

export const SearchBar = () => {
	return (
		<section className="searchbar">
			<h3 className="searchbar__title">Busca un pokemon</h3>
			<input
				className="searchbar__input"
				placeholder="id o nombre"
				type="text"
			/>
		</section>
	);
};
