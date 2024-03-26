import { useState } from 'react';
import Input from '../../general/Input';
import InstructCodeWrapper from '../InstructCodeWrapper';

function GotoXY() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	return (
		<InstructCodeWrapper>
			<div className="flex flex-col gap-2 justify-center items-center">
				<div className="flex gap-2 w-[50%] items-center justify-center">
					<span>X</span>
					<Input inputType="number" value={position.x} onChange={e => setPosition({ ...position, x: +e.target.value })} />
				</div>
				<div className="flex gap-2 w-[50%] items-center justify-center">
					<span>Y</span>
					<Input inputType="number" value={position.x} onChange={e => setPosition({ ...position, y: +e.target.value })} />
				</div>
				<div className="flex gap-2 items-center justify-center bg-blue-500 p-2 pl-4 pr-4 rounded-lg">
					Go to X: {position.x} Y:{position.y}
				</div>
			</div>
		</InstructCodeWrapper>
	);
}

export default GotoXY;
