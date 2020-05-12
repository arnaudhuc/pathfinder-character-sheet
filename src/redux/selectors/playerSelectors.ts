import { createSelector } from 'reselect';
import { Selector } from 'react-redux';
import { get } from 'lodash';
import { IStore } from '../../interface/store';
import { ICharacterState } from '../../models/interface/player';

const characterSelector = (state: IStore): ICharacterState =>
	state.characterReducer;

export const nameSelector = createSelector(
	characterSelector,
	(characterReducer) => get(characterReducer, 'name'),
);
