/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';
import { CustomButton } from '../CustomButton';

describe('CustomButton', () => {
	test('should render with default props', () => {
		const container = renderer
			.create(<CustomButton value="Next" handleClick={() => true} />)
			.toJSON();
		expect(container).toMatchSnapshot();
	});
});
