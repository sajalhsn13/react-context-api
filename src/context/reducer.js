import { ADD, SUB } from './actions';

const reducer = (state, action) => {
	switch (action.type) {
		case ADD:
			return {
				count: state.count + 1,
			};
		case SUB:
			return {
				count: state.count - 1,
			};
		default:
			break;
	}
};

export default reducer;
