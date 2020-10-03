import { useState, useEffect } from 'react';

export const useGetMultiple = (cantPokemon) => {
	const [pokemons, setpokemons] = useState([]);

	const listOfPokes = [];
	const getMultiple = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		data.results.map(async (poke) => {
			const pokeResponse = await fetch(poke.url);
			const pokeData = await pokeResponse.json();
			listOfPokes.push(pokeData);
			setpokemons(listOfPokes.flat());
		});
	};

	useEffect(() => {
		getMultiple(`https://pokeapi.co/api/v2/pokemon/?limit=${cantPokemon}`);
	}, []);

	return pokemons;
};
