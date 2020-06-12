import {
	reducer as playerInfosReducer,
	name as playerInfosName,
} from './playerInfosSlice';

import {
	reducer as characterReducer,
	name as characterName,
} from './characterInfosSlice';

export default {
	[playerInfosName]: playerInfosReducer,
	[characterName]: characterReducer,
};
