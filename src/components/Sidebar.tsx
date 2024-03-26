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
			<div className="flex flex-col gap-1">
				<div className="font-bold underline">Motion</div>
				<MoveCard />
				<RotateClockwiseCard />
				<RotateAntiClockwiseCard />
				<GotoXY />
			</div>
			<div className="flex flex-col gap-1">
				<div className="font-bold underline">Looks</div>
				<SayCardTime />
				<SayCard />
				<ThinkCard />
				<ThinkCardTime />
			</div>
		</div>
	);
}
