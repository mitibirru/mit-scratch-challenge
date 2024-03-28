import GotoXY from '../components/molecules/moves/GotoXY';
import MoveCard from '../components/molecules/moves/MoveCard';
import RotateAntiClockwiseCard from '../components/molecules/moves/RotateAntiClockwiseCard';
import RotateClockwiseCard from '../components/molecules/moves/RotateClockwiseCard';
import { MotionKeyType } from './types';

const GetMovesComponent = ({ id }: { id: MotionKeyType }) => {
	switch (id) {
		case 'move':
			return <MoveCard key="move" id="drag-move" index={1} />;
		case 'anticlockwise':
			return <RotateAntiClockwiseCard key="anticlockwise" id="drag-anticlockwise" index={3} />;
		case 'clockwise':
			return <RotateClockwiseCard key="clockwise" id="drag-clockwise" index={2} />;
		case 'goto-xy':
			return <GotoXY key="goto-xy" id="drag-goto-xy" index={4} />;
		default:
			return null;
	}
};

export default GetMovesComponent;
