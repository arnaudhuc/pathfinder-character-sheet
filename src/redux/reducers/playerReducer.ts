import { createSlice } from '@reduxjs/toolkit';
import { playerModel } from '../../models';
import { ICharacterState } from '../../models/interface/player';

const initialState = {
	name: '',
};

export const slice = createSlice({
	name: 'Character',
	initialState,
	reducers: {
		setCharacterName: (state: ICharacterState, action): void => {
			// eslint-disable-next-line no-param-reassign
			state.name = playerModel(action.payload);
		},
	},
});

export const { actions, reducer } = slice;
