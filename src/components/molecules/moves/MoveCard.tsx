import { useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';

function MoveCard() {
	const [steps, setSteps] = useState(0);
	return (
		<InstructCodeWrapper>
			<span>move</span>
			<Input inputType="number" onChange={e => setSteps(+e.target.value)} value={steps} />
			<span>steps</span>
		</InstructCodeWrapper>
	);
}

export default MoveCard;
