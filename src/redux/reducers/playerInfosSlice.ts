import { createSlice } from '@reduxjs/toolkit';
import { IPlayerState } from '../../models/interface/player';

const initialState: IPlayerState = {
	characterName: '',
	playerName: '',
};

const slice = createSlice({
	name: 'playerInfos',
	initialState,
	reducers: {
		setCharacterName: (state: IPlayerState, action): IPlayerState => ({
			...state,
			characterName: action.payload,
		}),
		setPlayerName: (state: IPlayerState, action): IPlayerState => ({
			...state,
			playerName: action.payload,
		}),
	},
});

export const { actions, reducer, name } = slice;
