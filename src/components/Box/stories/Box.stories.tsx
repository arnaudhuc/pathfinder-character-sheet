/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Box } from '../Box';

storiesOf('Box', module).add('Default', () => {
	return (
		<Box handleClick={() => true}>
			<p>Children of the box</p>
		</Box>
	);
});
