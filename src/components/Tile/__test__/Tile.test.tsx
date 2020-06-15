/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';
import { Tile } from '../Tile';
import { ITileInfo } from '../../../models/interface/ancestries';
import { EAbility } from '../../../models/enum/ability';
import createComponentWithIntl from '../../../utils/createComponentWithIntl';

describe('Tile', () => {
	const ancestry: ITileInfo = {
		id: 1,
		name: 'elf',
		imageUrl: 'elf.jpg',
		abilityBoost: [EAbility.DEX, EAbility.INT, EAbility.FRE],
		abilityFlaw: [EAbility.CON],
		isClicked: false,
	};
	test('should render with default props', () => {
		const container = createComponentWithIntl(
			<Tile ancestry={ancestry} handleClick={() => true} tileType="ancestry" />,
		);

		expect(container).toMatchSnapshot();
	});

	test('should render when the Tile is clicked', () => {
		ancestry.isClicked = true;
		const container = createComponentWithIntl(
			<Tile ancestry={ancestry} handleClick={() => true} tileType="ancestry" />,
		);

		expect(container).toMatchSnapshot();
	});
});
