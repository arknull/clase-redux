import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/pokemoncard.css';
import { addFavorite } from '../actions/pokemonactions';

export const SinglePokemon = () => {
	const dispatch = useDispatch();
	const pokemon = useSelector((state) => state.pokemonReducer.pokemon);

	const addFavoritePokemon = () => {
		dispatch(
			addFavorite({
				name: pokemon.name,
				picture: pokemon.sprites?.front_default,
			})
		);
	};

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
			<button className="pokemon-card__button" onClick={addFavoritePokemon}>
				+
			</button>
		</section>
	);
};
