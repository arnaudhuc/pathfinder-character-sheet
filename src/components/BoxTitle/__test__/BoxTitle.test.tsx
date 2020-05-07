/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';

import { BoxTitle } from '../BoxTitle';
import { EColor } from '../../../enums/button';

describe('BoxTitle', () => {
	test('should render with default props', () => {
		const component = renderer.create(<BoxTitle title="Valeur" />).toJSON();

		expect(component).toMatchSnapshot();
	});

	test('should render with secondary color', () => {
		const component = renderer
			.create(<BoxTitle title="Valeur" color={EColor.SECONDARY} />)
			.toJSON();

		expect(component).toMatchSnapshot();
	});
});
