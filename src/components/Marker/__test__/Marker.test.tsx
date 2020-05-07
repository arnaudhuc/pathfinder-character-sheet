/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';
import { Marker } from '../Marker';

describe('Marker', () => {
	test('should render with default props', () => {
		const container = renderer.create(<Marker markers={['1']} />).toJSON();

		expect(container).toMatchSnapshot();
	});

	test('should render multiple marker', () => {
		const container = renderer
			.create(<Marker markers={['1', '2', '3', '4']} />)
			.toJSON();

		expect(container).toMatchSnapshot();
	});
});
