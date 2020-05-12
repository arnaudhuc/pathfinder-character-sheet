import { ICharacterState } from '../models/interface/player';

export interface IStore {
	characterReducer: ICharacterState;
}

export interface ICharacter {
	name?: string;
}
