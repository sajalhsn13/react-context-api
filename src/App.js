import React from 'react';
import './App.css';
import { ADD, SUB } from './context/actions';
import { useContextValue } from './context/StateProvider';

const App = () => {
	const [state, dispatch] = useContextValue();
	const increment = () => {
		dispatch({
			type: ADD,
		});
	};

	const decrement = () => {
		dispatch({
			type: SUB,
		});
	};

	return (
		<div className="App">
			<p>{state.count}</p>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	);
};

export default App;
