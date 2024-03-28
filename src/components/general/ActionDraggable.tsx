import { Draggable } from 'react-beautiful-dnd';

function ActionDraggle(Component: any) {
	return (props: any) => {
		const { key, index, id, ...compProps } = props;
		return (
			<Draggable key={key} draggableId={id} index={index}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
						<Component {...compProps} />
					</div>
				)}
			</Draggable>
		);
	};
}

export default ActionDraggle;
