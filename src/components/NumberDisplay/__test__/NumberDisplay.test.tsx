/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';
import { NumberDisplay } from '../NumberDisplay';

describe('NumberDisplay', () => {
	test('should render with default props', () => {
		const container = renderer
			.create(<NumberDisplay messageLeft="CA" numberToDisplay={12} />)
			.toJSON();

		expect(container).toMatchSnapshot();
	});
	test('should render with right value', () => {
		const container = renderer
			.create(
				<NumberDisplay
					messageLeft="CA"
					numberToDisplay={12}
					isLeftDark={true}
					messageRight={'-5'}
				/>,
			)
			.toJSON();

		expect(container).toMatchSnapshot();
	});
});
