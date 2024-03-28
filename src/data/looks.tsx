import SayCard from '../components/molecules/looks/SayCard';
import SayCardTime from '../components/molecules/looks/SayCardTime';
import ThinkCard from '../components/molecules/looks/ThinkCard';
import ThinkCardTime from '../components/molecules/looks/ThinkCardTime';
import { LooksKeyType } from './types';

const GetLooksComponent = ({ id }: { id: LooksKeyType }) => {
	switch (id) {
		case 'say':
			return <SayCard key="say" id="drag-say" index={6} />;
		case 'say-time':
			return <SayCardTime key="say-time" id="drag-say-time" index={5} />;
		case 'think':
			return <ThinkCard key="think" id="drag-think" index={7} />;
		case 'think-time':
			return <ThinkCardTime key="think-time" id="drag-think-time" index={8} />;
		default:
			return null;
	}
};

export default GetLooksComponent;
