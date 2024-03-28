import { useContext, useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';
import ActionDraggle from '../../general/ActionDraggable';
import { ScratchContext } from '../../../context';

function SayCard() {
	const { dispatch } = useContext(ScratchContext);
	const [input, setinput] = useState('');

	const messageHandle = () => {
		dispatch({
			looksType: 'say',
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
				<span onClick={messageHandle}>Say</span>
				<Input value={input} onChange={e => setinput(e.target.value)} />
			</div>
		</InstructCodeWrapper>
	);
}

export default ActionDraggle(SayCard);
