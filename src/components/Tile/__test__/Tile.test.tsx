/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';
import { Tile } from '../Tile';
import { IAncestries } from '../../../models/interface/ancestries';
import { EAbility } from '../../../models/enum/ability';

describe('Tile', () => {
	const ancestry: IAncestries = {
		id: 1,
		name: 'elf',
		imageUrl: 'elf.jpg',
		abilityBoost: [EAbility.DEX, EAbility.INT, EAbility.FRE],
		abilityFlaw: [EAbility.CON],
		isClicked: false,
	};
	test('should render with default props', () => {
		const container = renderer.create(
			<Tile ancestry={ancestry} handleClick={() => true} />,
		);

		expect(container).toMatchSnapshot();
	});

	test('should render when the Tile is clicked', () => {
		ancestry.isClicked = true;
		const container = renderer.create(
			<Tile ancestry={ancestry} handleClick={() => true} />,
		);

		expect(container).toMatchSnapshot();
	});
});
