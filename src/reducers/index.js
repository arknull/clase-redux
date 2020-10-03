const initialState = {
	count: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'AUMENTAR':
			return { count: state.count + 1 };
		case 'DISMINUIR':
			return { count: state.count - 1 };

		default:
			return state;
	}
};
