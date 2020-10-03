import React, { useState, useEffect } from 'react';

export const useGetPokemon = (url) => {
	const [name, setName] = useState('');
	const [picture, setPicture] = useState('');
	const [types, setTypes] = useState([]);

	const getPokemon = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		setName(data.name);
		setPicture(data.sprites.front_default);
		setTypes(data.types);
	};
	useEffect(() => {
		getPokemon(url);
	}, []);

	return [name, picture, types];
};
