import InstructCodeWrapper from '../InstructCodeWrapper';
import Input from '../../general/Input';
import { useState } from 'react';
import { FiRotateCw } from 'react-icons/fi';

function RotateClockwiseCard() {
	const [degrees, setDegrees] = useState(0);
	return (
		<InstructCodeWrapper>
			<span>turn</span>
			<FiRotateCw size={60} className='mt-[-16px] mb-[-16px] mr-[-8px]' />
			<Input inputType="number" onChange={e => setDegrees(+e.target.value)} value={degrees} />
			<span>degrees</span>
		</InstructCodeWrapper>
	);
}

export default RotateClockwiseCard;
