import { ReactNode } from 'react';

interface InstructCodeWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	type?: 'motion' | 'looks';
}

function InstructCodeWrapper({ children, type = 'motion', ...props }: InstructCodeWrapperProps) {
	return (
		<div
			className={`gap-2 cursor-grab ${type === 'motion' ? 'bg-blue-700' : 'bg-purple-600'} items-center rounded-xl p-2 pr-4 text-white flex active:cursor-grabbing`}
			{...props}>
			{children}
		</div>
	);
}

export default InstructCodeWrapper;
