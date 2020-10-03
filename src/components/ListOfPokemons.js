import React from 'react';
import { PokemonCard } from './PokemonCard';
import { useSelector } from 'react-redux';

export const ListOfPokemons = () => {
	const pokemons = useSelector((state) => state.pokemonReducer.favorites);
	return (
		<section className="poke-list">
			{pokemons.map((poke) => (
				<PokemonCard key={poke.name} {...poke} />
			))}
		</section>
	);
};
