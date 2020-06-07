/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Tile } from '../Tile';
import { EAbility } from '../../../models/enum/ability';
import { IAncestries } from '../../../models/interface/ancestries';

storiesOf('Tiles', module)
	.add('Default', () => {
		const ancestry: IAncestries = {
			id: 1,
			name: 'elf',
			imageUrl: 'elf.jpg',
			abilityBoost: [EAbility.DEX, EAbility.INT, EAbility.FRE],
			abilityFlaw: [EAbility.CON],
			isClicked: false,
		};
		return <Tile ancestry={ancestry} handleClick={() => true} />;
	})
	.add('Clicked', () => {
		const ancestry: IAncestries = {
			id: 1,
			name: 'elf',
			imageUrl: 'elf.jpg',
			abilityBoost: [EAbility.DEX, EAbility.INT, EAbility.FRE],
			abilityFlaw: [EAbility.CON],
			isClicked: true,
		};
		return <Tile ancestry={ancestry} handleClick={() => true} />;
	});
