import { IPlayerState } from '../models/interface/player';

export interface IStore {
	characterReducer: IPlayerState;
}

export interface ICharacter {
	name: string;
}
