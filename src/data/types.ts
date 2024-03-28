export type LooksKeyType = 'say-time' | 'say' | 'think-time' | 'think';
export type MotionKeyType = 'clockwise' | 'move' | 'anticlockwise' | 'goto-xy';

export const moves: Array<{
	key: MotionKeyType;
	id: string;
}> = [
	{
		key: 'move',
		id: 'drag-move'
	},
	{
		key: 'clockwise',
		id: 'drag-clockwise'
	},
	{
		key: 'anticlockwise',
		id: 'drag-anticlockwise'
	},
	{
		key: 'goto-xy',
		id: 'drag-goto-xy'
	}
];

export const looks: Array<{
	key: LooksKeyType;
	id: string;
}> = [
	{
		key: 'say-time',
		id: 'drag-say-time'
	},
	{
		key: 'say',
		id: 'drag-say'
	},
	{
		key: 'think',
		id: 'drag-think'
	},
	{
		key: 'think-time',
		id: 'drag-think-time'
	}
];

export type Move = 'move' | 'rotate-clockwise' | 'rotate-anti-clockwise' | 'go-to-x-y' | 'set-x' | 'set-y' | 'change-x' | 'change-y';

export type ScratchActions = {
	type: ScratchActionsType;
	payload: any;
};

export type ScratchActionsType = 'SAY_ACTION' | 'SAY-ACTION-TYPE' | 'THINK' | 'THINK-TIME';

export type ScratchContextType = {
	state: ScratchStateType;
	dispatch: (item: ScratchStateType) => void;
};

export type ScratchStateType = {
	looksType: LooksKeyType | null;
	message: string;
};
