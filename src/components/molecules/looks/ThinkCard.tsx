import { useContext, useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';
import ActionDraggle from '../../general/ActionDraggable';
import { ScratchContext } from '../../../context';

function ThinkCard() {
	const [input, setinput] = useState('');
	const { dispatch } = useContext(ScratchContext);

	const messageHandle = () => {
		dispatch({
			looksType: 'think',
			message: input
		});
		setTimeout(
			() =>
				dispatch({
					looksType: null,
					message: ''
				}),
			1000
		);
	};

	return (
		<InstructCodeWrapper type="looks">
			<div className="flex gap-2 items-center justify-center">
				<span onClick={messageHandle}>Think</span>
				<Input value={input} onChange={e => setinput(e.target.value)} />
			</div>
		</InstructCodeWrapper>
	);
}

export default ActionDraggle(ThinkCard);
