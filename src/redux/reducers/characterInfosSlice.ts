import { createSlice } from '@reduxjs/toolkit';
import { ICharacterState } from '../../models/interface/character';

const initialState: ICharacterState = {
	ancestry: '',
	strengthScore: 10,
	dexterityScore: 10,
	constitutionScore: 10,
	intelligenceScore: 10,
	wisdomScore: 10,
	charismaScore: 10,
};

const slice = createSlice({
	name: 'playerInfos',
	initialState,
	reducers: {
		setAncestry: (state: ICharacterState, action): ICharacterState => ({
			...state,
			ancestry: action.payload,
		}),
		setStrengthScore: (state: ICharacterState, action): ICharacterState => ({
			...state,
			strengthScore: action.payload,
		}),
		setDexterityScore: (state: ICharacterState, action): ICharacterState => ({
			...state,
			dexterityScore: action.payload,
		}),
		setConstitutionScore: (
			state: ICharacterState,
			action,
		): ICharacterState => ({
			...state,
			constitutionScore: action.payload,
		}),
		setIntelligenceScore: (
			state: ICharacterState,
			action,
		): ICharacterState => ({
			...state,
			intelligenceScore: action.payload,
		}),
		setWisdomScore: (state: ICharacterState, action): ICharacterState => ({
			...state,
			wisdomScore: action.payload,
		}),
		setCharismaScore: (state: ICharacterState, action): ICharacterState => ({
			...state,
			charismaScore: action.payload,
		}),
	},
});

export const { actions, reducer, name } = slice;
