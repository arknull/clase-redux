import React from 'react';
import { useGetPokemon } from '../hooks/useGetPokemon';
import '../styles/pokemoncard.css';

export const SinglePokemon = () => {
	const pokemon = useGetPokemon('charizard');

	return (
		<section className="pokemon-card">
			<h1 className="pokemon-card__name">{pokemon.name}</h1>
			<img
				className="pokemon-card__image"
				src={pokemon.sprites?.front_default}
				alt={pokemon.name}
			/>
			{pokemon.types?.map((type) => (
				<p className="pokemon-card__type" key={type.slot}>
					{type.type.name}
				</p>
			))}
			<button className="pokemon-card__button">+</button>
		</section>
	);
};
