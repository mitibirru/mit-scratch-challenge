import { useState } from 'react';
import InstructCodeWrapper from '../InstructCodeWrapper';
import { FiRotateCcw } from 'react-icons/fi';
import Input from '../../general/Input';

function RotateAntiClockwiseCard() {
	const [degrees, setDegrees] = useState(0);
	return (
		<InstructCodeWrapper>
			<span>turn</span>
			<FiRotateCcw size={60} className="mt-[-16px] mb-[-16px] mr-[-8px]" />
			<Input inputType="number" onChange={e => setDegrees(+e.target.value)} value={degrees} />
			<span>degrees</span>
		</InstructCodeWrapper>
	);
}

export default RotateAntiClockwiseCard;
