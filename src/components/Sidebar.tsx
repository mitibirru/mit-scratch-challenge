import { Droppable } from 'react-beautiful-dnd';
import SayCard from './molecules/looks/SayCard';
import SayCardTime from './molecules/looks/SayCardTime';
import ThinkCard from './molecules/looks/ThinkCard';
import ThinkCardTime from './molecules/looks/ThinkCardTime';
import GotoXY from './molecules/moves/GotoXY';
import MoveCard from './molecules/moves/MoveCard';
import RotateAntiClockwiseCard from './molecules/moves/RotateAntiClockwiseCard';
import RotateClockwiseCard from './molecules/moves/RotateClockwiseCard';

export default function Sidebar() {
	return (
		<div className="w-60 flex-none h-full overflow-y-auto flex flex-col gap-8 items-start p-2 border-r border-gray-200">
			<Droppable droppableId="droppable-motion" type="motions">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col gap-1">
						<div className="font-bold underline">Motion</div>
						<MoveCard key="move" id="drag-move" index={1} />
						<RotateClockwiseCard key="clockwise" id="drag-clockwise" index={2} />
						<RotateAntiClockwiseCard key="anticlockwise" id="drag-anticlockwise" index={3} />
						<GotoXY key="goto-xy" id="drag-goto-xy" index={4} />
					</div>
				)}
			</Droppable>
			<Droppable droppableId="droppable-looks" type="looks">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col gap-1">
						<div className="font-bold underline">Looks</div>
						<SayCard key="say" id="drag-say" index={6} />
						<SayCardTime key="say-time" id="drag-say-time" index={5} />
						<ThinkCard key="think" id="drag-think" index={7} />
						<ThinkCardTime key="think-time" id="drag-think-time" index={8} />
					</div>
				)}
			</Droppable>
		</div>
	);
}
