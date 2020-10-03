import React from 'react';
import { Titles } from './Titles';
import { PokemonCard } from './PokemonCard';
import { ListOfPokemons } from './ListOfPokemons';
import { Counter } from './Counter';
import '../styles/main.css';
export const App = () => {
	return (
		<>
			<Titles />
			<Counter />
			{/* <PokemonCard /> */}
			{/* <ListOfPokemons /> */}
		</>
	);
};
