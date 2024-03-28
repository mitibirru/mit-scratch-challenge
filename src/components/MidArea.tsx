import { Droppable } from 'react-beautiful-dnd';
import GetLooksComponent from '../data/looks';
import GetMovesComponent from '../data/moves';
import { LooksKeyType, MotionKeyType } from '../data/types';

export default function MidArea({ list }: { list: Array<{ type: string; key: string }> }) {
	return (
		<Droppable droppableId="droppable-area" type="motions">
			{provided => (
				<div ref={provided.innerRef} className="flex-1 h-full overflow-auto flex justify-center">
					{list && (
						<div className="shadow-2xl w-72 m-12 rounded-lg px-1 py-4 border-2 border-zinc-200 flex gap-2 flex-col">
							{list.map(item => {
								const key = item.key;
								let jsx = item.type === 'motions' ? <GetMovesComponent id={key as MotionKeyType} /> : <GetLooksComponent id={key as LooksKeyType} />;
								return jsx;
							})}
						</div>
					)}
				</div>
			)}
		</Droppable>
	);
}
