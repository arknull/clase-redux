import React from 'react';
import { useGetMultiple } from '../hooks/useGetMultiple';
import { PokemonCard } from './PokemonCard';

export const ListOfPokemons = () => {
	const pokemons = useGetMultiple(250);
	return (
		<section className="poke-list">
			{pokemons.map((poke) => (
				<PokemonCard key={poke.id} {...poke} />
			))}
		</section>
	);
};
