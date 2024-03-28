import { useContext, useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';
import ActionDraggle from '../../general/ActionDraggable';
import { ScratchContext } from '../../../context';

function ThinkCardTime() {
	const { dispatch } = useContext(ScratchContext);
	const [input, setinput] = useState('');
	const [seconds, setSeconds] = useState(0);

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
			seconds * 1000
		);
	};

	return (
		<InstructCodeWrapper type="looks">
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-center text-sm">
					<span onClick={messageHandle}>Think</span>
					<Input value={input} onChange={e => setinput(e.target.value)} />
					<span>for</span>
				</div>
				<div className="flex items-center w-[60%]">
					<Input value={seconds} inputType="number" onChange={e => setSeconds(+e.target.value)} />
					<span onClick={messageHandle}>seconds</span>
				</div>
			</div>
		</InstructCodeWrapper>
	);
}

export default ActionDraggle(ThinkCardTime);
