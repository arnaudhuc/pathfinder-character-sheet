import {
	reducer as playerInfosReducer,
	name as playerInfosName,
} from './playerInfosSlice';

export default {
	[playerInfosName]: playerInfosReducer,
};
