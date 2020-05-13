import './interface/player';
import { ICharacter } from '../interface/store';

export const getPlayerNameFromPayload = (payload: ICharacter) => {
	return payload.name;
};
