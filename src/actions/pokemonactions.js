export const getPokemon = (pokeID) => async (dispatch) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
	const data = await response.json();
	dispatch({
		type: 'GET_POKEMON',
		payload: data,
	});
};

export const addFavorite = ({ name, picture }) => (dispatch) => {
	dispatch({
		type: 'ADD_FAVORITE',
		payload: { name, picture },
	});
};

export const deleteFavorite = (name) => (dispatch) => {
	dispatch({
		type: 'DELETE_FAVORITE',
		payload: name,
	});
};
