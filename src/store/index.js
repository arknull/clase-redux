import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from '../reducers';
import { pokemonReducer } from '../reducers/pokemon';
const rootReducer = combineReducers({ reducer, pokemonReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const generateStore = () => {
	const store = createStore(
		rootReducer,
		composeEnhancer(applyMiddleware(thunk))
	);
	return store;
};
