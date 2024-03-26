import { useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';

function SayCard() {
	const [input, setinput] = useState('');
	return (
		<InstructCodeWrapper type="looks">
			<div className="flex gap-2 items-center justify-center">
				<span>Say</span>
				<Input value={input} onChange={e => setinput(e.target.value)} />
			</div>
		</InstructCodeWrapper>
	);
}

export default SayCard;
