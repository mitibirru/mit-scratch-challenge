import { useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';

function SayCardTime() {
	const [input, setinput] = useState('');
	const [seconds, setSeconds] = useState(0);
	return (
		<InstructCodeWrapper type="looks">
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-center text-sm">
					<span>Say</span>
					<Input value={input} onChange={e => setinput(e.target.value)} />
					<span>for</span>
				</div>
				<div className="flex items-center w-[60%]">
					<Input value={seconds} inputType="number" onChange={e => setSeconds(+e.target.value)} />
					<span>seconds</span>
				</div>
			</div>
		</InstructCodeWrapper>
	);
}

export default SayCardTime;
