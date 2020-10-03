import React from 'react';
import '../styles/pokemoncard.css';

export const PokemonCard = ({ name, sprites, types }) => {
	return (
		<section className="pokemon-card">
			<h1 className="pokemon-card__name">{name}</h1>
			<img className="pokemon-card__image" src={sprites.front_default} alt="" />
			{types?.map((type) => (
				<p className="pokemon-card__type" key={type.slot}>
					{type.type.name}
				</p>
			))}
			<button className="pokemon-card__button">+</button>
		</section>
	);
};
