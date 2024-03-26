import { ReactNode } from 'react';

function InstructCodeWrapper({ children, type = 'motion' }: { children: ReactNode; type?: 'motion' | 'looks' }) {
	return (
		<div className={`gap-2 cursor-grab ${type === 'motion' ? 'bg-blue-700' : 'bg-purple-600'} items-center rounded-xl p-2 pr-4 text-white flex active:cursor-grabbing`}>
			{children}
		</div>
	);
}

export default InstructCodeWrapper;
