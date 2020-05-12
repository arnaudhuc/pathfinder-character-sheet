import './interface/player';
import { ICharacter } from '../interface/store';

export const playerModel = (data: ICharacter): ICharacter => ({
	name: data?.name,
});
