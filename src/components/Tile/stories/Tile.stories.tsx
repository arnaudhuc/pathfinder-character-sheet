/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Tile } from '../Tile';

storiesOf('Tiles', module)
	.add('Default', () => (
		<Tile
			imgUrl={'https://via.placeholder.com/200x250'}
			title="Title"
			description="description"
			handleClick={() => true}
			isClicked={false}
		/>
	))
	.add('Clicked', () => (
		<Tile
			imgUrl={'https://via.placeholder.com/200x250'}
			title="Title"
			description="description"
			handleClick={() => true}
			isClicked={true}
		/>
	));
