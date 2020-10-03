const initialState = {
	pokemon: {},
	favorites: [],
};

export const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_POKEMON':
			return { ...state, pokemon: action.payload };
		case 'ADD_FAVORITE':
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case 'DELETE_FAVORITE':
			return {
				...state,
				favorites: state.favorites.filter(
					(poke) => poke.name !== action.payload
				),
			};

		default:
			return state;
	}
};
