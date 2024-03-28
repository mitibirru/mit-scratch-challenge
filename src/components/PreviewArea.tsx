import { FaPlay } from 'react-icons/fa';
import CatSprite from './CatSprite';

export default function PreviewArea() {
	return (
		<div className="flex-none w-full h-full overflow-y-auto">
			<button
				type="button"
				className="flex gap-2 m-4 mx-auto items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
				<FaPlay /> <p>Run</p>
			</button>
			{/* <button
				type="button"
				className="flex gap-2 items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
				<FaStopCircle size={20} />
				<p>Stop</p>
			</button> */}
			<div className="px-4 w-full relative">
				<CatSprite />
			</div>
		</div>
	);
}
