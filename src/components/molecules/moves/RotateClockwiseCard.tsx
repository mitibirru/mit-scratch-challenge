import InstructCodeWrapper from '../InstructCodeWrapper';
import Input from '../../general/Input';
import { useState } from 'react';
import { FiRotateCw } from 'react-icons/fi';
import ActionDraggle from '../../general/ActionDraggable';

function RotateClockwiseCard() {
	const [degrees, setDegrees] = useState(0);

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const el = document.getElementById('cat-sprite');
		if (!el) return;

		el.style.transform = `rotate(${degrees}deg)`;
	};

	return (
		<InstructCodeWrapper>
			<span>turn</span>
			{/* @ts-ignore */}
			<FiRotateCw onClick={handleClick} size={60} className="mt-[-16px] mb-[-16px] mr-[-8px]" />
			<Input inputType="number" onChange={e => setDegrees(+e.target.value)} value={degrees} />
			<span>degrees</span>
		</InstructCodeWrapper>
	);
}

export default ActionDraggle(RotateClockwiseCard);
