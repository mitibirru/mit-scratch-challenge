import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';
import Header from './components/Header';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import ScratchContextProvider from './context';

const reorder = (list: Array<{ type: string; key: string }>, startIndex: number, endIndex: number) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

export default function App() {
	const [actionsList, setActionsList] = useState<Array<{ type: string; key: string }>>([]);

	const handleDragEnd = (result: DropResult) => {
		if (result.source.droppableId === 'droppable-area') {
			reorder(actionsList, result.source.index, result.destination?.index || 0);
		} else {
			const newAction = { key: result.draggableId.split('-').slice(1).join('-'), type: result.type };
			const newList = Array.from(actionsList);
			newList.push(newAction);
			setActionsList(newList);
		}
	};

	return (
		<ScratchContextProvider>
			<DragDropContext onDragEnd={handleDragEnd}>
				<div className="bg-blue-100 font-sans">
					<Header />
					<div className="h-screen overflow-hidden flex flex-row">
						<div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
							<Sidebar />
							<MidArea list={actionsList} />
						</div>

						<div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
							<PreviewArea />
						</div>
					</div>
				</div>
			</DragDropContext>
		</ScratchContextProvider>
	);
}
