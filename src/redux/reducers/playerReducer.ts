import { createSlice } from 'redux-starter-kit';
import { playerModel } from '../../models';
import { ICharacterState } from '../../models/interface/player';

const initialState = {
	data: {},
};

export const slice = createSlice({
	name: 'Character',
	initialState,
	reducers: {
		setCharacter: (state: ICharacterState, action): void => {
			// eslint-disable-next-line no-param-reassign
			state.data = playerModel(action.payload);
		},
	},
});

export const { actions, reducer } = slice;
