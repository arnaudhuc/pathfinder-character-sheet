import { createSlice } from '@reduxjs/toolkit';
import { ICharacterState } from '../../models/interface/character';
import { EAbility } from '../../models/enum/ability';

const initialState: ICharacterState = {
	ancestry: '',
	class: '',
	strengthScore: 10,
	dexterityScore: 10,
	constitutionScore: 10,
	intelligenceScore: 10,
	wisdomScore: 10,
	charismaScore: 10,
	ancestryAbilityBoost: [EAbility.NUL],
	ancestryAbilityFlaw: [EAbility.NUL],
	classAbilityBoost: [EAbility.NUL],
	classAbilityFlaw: [EAbility.NUL],
};

const slice = createSlice({
	name: 'characterInfos',
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
		setAncestryAbilityBoost: (
			state: ICharacterState,
			action,
		): ICharacterState => ({
			...state,
			ancestryAbilityBoost: action.payload,
		}),
		setAncestryAbilityFlaw: (
			state: ICharacterState,
			action,
		): ICharacterState => ({
			...state,
			ancestryAbilityFlaw: action.payload,
		}),
		setClass: (state: ICharacterState, action): ICharacterState => ({
			...state,
			class: action.payload,
		}),
		setClassAbilityBoost: (
			state: ICharacterState,
			action,
		): ICharacterState => ({
			...state,
			classAbilityBoost: action.payload,
		}),
		setClassAbilityFlaw: (state: ICharacterState, action): ICharacterState => ({
			...state,
			classAbilityFlaw: action.payload,
		}),
	},
});

export const { actions, reducer, name } = slice;
