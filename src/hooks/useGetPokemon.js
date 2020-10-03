import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetPokemon = (id) => {
	const [pokemon, setpokemon] = useState({});

	const getPokemon = async (url) => {
		const response = await axios.get(url);
		const data = response.data;
		setpokemon(data);
	};
	useEffect(() => {
		getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
	}, []);

	return pokemon;
};
