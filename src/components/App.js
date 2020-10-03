import React from 'react';
import { Titles } from './Titles';
import { SinglePokemon } from './SinglePokemon';
import { ListOfPokemons } from './ListOfPokemons';
import { Counter } from './Counter';
import '../styles/main.css';
export const App = () => {
	return (
		<>
			<Titles />
			{/* <Counter /> */}
			<SinglePokemon />
			{/* <ListOfPokemons /> */}
		</>
	);
};
