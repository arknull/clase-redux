import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../actions/pokemonactions';
import '../styles/pokemoncard.css';

export const PokemonCard = ({ name, picture }) => {
	const dispatch = useDispatch();

	const deleteFavoritePokemon = () => {
		dispatch(deleteFavorite(name));
	};

	return (
		<section className="pokemon-card">
			<h1 className="pokemon-card__name">{name}</h1>
			<img className="pokemon-card__image" src={picture} alt="" />
			<button className="pokemon-card__button" onClick={deleteFavoritePokemon}>
				x
			</button>
		</section>
	);
};
