/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';

import { Box } from '../Box';

describe('Box', () => {
	test('should render with default props', () => {
		const component = renderer
			.create(
				<Box handleClick={() => true}>
					<p>Children of the box</p>
				</Box>,
			)
			.toJSON();

		expect(component).toMatchSnapshot();
	});
});
