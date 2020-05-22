import { createSelector } from 'reselect';
import { get } from 'lodash';
import { IPlayerState } from '../../models/interface/player';

interface iStore {
	playerInfos: IPlayerState;
}

export const playerReducerSelector = (state: iStore) => state.playerInfos;

export const characterName = createSelector(
	playerReducerSelector,
	(playerReducer) => get(playerReducer, 'characterName'),
);
