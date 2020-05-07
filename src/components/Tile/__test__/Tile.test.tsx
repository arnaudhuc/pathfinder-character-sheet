/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';
import { Tile } from '../Tile';

describe('Tile', () => {
	test('should render with default props', () => {
		const container = renderer.create(
			<Tile
				imgUrl={
					'https://s1.qwant.com/thumbr/0x380/0/7/1facf8942b993307b279a5bde7cd835bc9596708014bacee90d0a7639ac13e/a9a41b339e1de3975c4f5227ae28e939.png?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa9%2Fa4%2F1b%2Fa9a41b339e1de3975c4f5227ae28e939.png'
				}
				title="Roublard"
				description="Le roublard est un maître des activités douteuses qui frappe quand ses ennemies s'y attendent le moins."
				handleClick={() => true}
				isClicked={false}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	test('should render when the Tile is clicked', () => {
		const container = renderer.create(
			<Tile
				imgUrl={
					'https://s1.qwant.com/thumbr/0x380/0/7/1facf8942b993307b279a5bde7cd835bc9596708014bacee90d0a7639ac13e/a9a41b339e1de3975c4f5227ae28e939.png?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa9%2Fa4%2F1b%2Fa9a41b339e1de3975c4f5227ae28e939.png'
				}
				title="Roublard"
				description="Le roublard est un maître des activités douteuses qui frappe quand ses ennemies s'y attendent le moins."
				handleClick={() => true}
				isClicked={true}
			/>,
		);

		expect(container).toMatchSnapshot();
	});
});
