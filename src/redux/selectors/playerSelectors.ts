import { createSelector } from 'reselect';
import { get } from 'lodash';
import { ICharacterState } from '../../models/interface/player';

interface iStore {
	playerInfos: ICharacterState;
}

export const playerReducerSelector = (state: iStore) => state.playerInfos;

export const characterName = createSelector(
	playerReducerSelector,
	(playerReducer) => get(playerReducer, 'characterName'),
);
