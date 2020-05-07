/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';
import { TextInput } from '../TextInput';

describe('TextInput', () => {
	test('should render with default props', () => {
		const container = renderer.create(<TextInput label="Nom" />);

		expect(container).toMatchSnapshot();
	});

	test('should render with no label', () => {
		const container = renderer.create(<TextInput />);

		expect(container).toMatchSnapshot();
	});
});
