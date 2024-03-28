import { ReactNode, createContext, useState } from 'react';
import { ScratchContextType, ScratchStateType } from './data/types';

const initialState: ScratchContextType = {
	state: {
		looksType: null,
		message: ''
	},
	dispatch: (item: ScratchStateType) => {}
};

export const ScratchContext = createContext(initialState);

const ScratchContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<ScratchStateType>({
		looksType: null,
		message: ''
	});

	const ctxValue: ScratchContextType = {
		state,
		dispatch: (item: ScratchStateType) => setState(item)
	};
	return <ScratchContext.Provider value={ctxValue}>{children}</ScratchContext.Provider>;
};

export default ScratchContextProvider;
