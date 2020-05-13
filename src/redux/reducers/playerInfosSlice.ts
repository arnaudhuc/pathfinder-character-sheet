import { createSlice } from '@reduxjs/toolkit';
import { ICharacterState } from '../../models/interface/player';

const initialState: ICharacterState = {
	characterName: '',
	playerName: '',
};

const slice = createSlice({
	name: 'playerInfos',
	initialState,
	reducers: {
		setCharacterName: (state: ICharacterState, action): ICharacterState => ({
			...state,
			characterName: action.payload,
		}),
		setPlayerName: (state: ICharacterState, action): ICharacterState => ({
			...state,
			playerName: action.payload,
		}),
	},
});

export const { actions, reducer, name } = slice;
