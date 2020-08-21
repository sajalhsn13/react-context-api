import React, { createContext, useContext, useReducer } from 'react';

export const Context = createContext();

export const useContextValue = () => useContext(Context);

const StateProvider = ({ initialState, reducer, children }) => (
	<Context.Provider value={useReducer(reducer, initialState)}>
		{children}
	</Context.Provider>
);

export default StateProvider;
