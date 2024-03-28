import { useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';
import ActionDraggle from '../../general/ActionDraggable';

function MoveCard() {
	const [steps, setSteps] = useState(0);

	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const el = document.getElementById('cat-sprite');
		if (!el) return;

		var left = el.offsetLeft;
		el.style.position = 'absolute';
		el.style.left = left + steps + 'px';
	};
	return (
		<InstructCodeWrapper onClick={handleClick}>
			<span>move</span>
			<Input inputType="number" onChange={e => setSteps(+e.target.value)} value={steps} />
			<span>steps</span>
		</InstructCodeWrapper>
	);
}

export default ActionDraggle(MoveCard);
