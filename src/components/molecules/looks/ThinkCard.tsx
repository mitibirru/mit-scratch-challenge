import { useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';

function ThinkCard() {
	const [input, setinput] = useState('');
	return (
		<InstructCodeWrapper type="looks">
			<div className="flex gap-2 items-center justify-center">
				<span>Think</span>
				<Input value={input} onChange={e => setinput(e.target.value)} />
			</div>
		</InstructCodeWrapper>
	);
}

export default ThinkCard;
