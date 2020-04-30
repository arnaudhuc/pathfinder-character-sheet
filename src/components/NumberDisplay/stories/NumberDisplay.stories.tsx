/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { NumberDisplay } from '../NumberDisplay';

storiesOf('NumberDisplay', module)
	.add('Light', () => (
		<div css={{ padding: '50px' }}>
			<NumberDisplay messageLeft="CA" numberToDisplay={12} />
		</div>
	))
	.add('Dark', () => (
		<div css={{ padding: '50px' }}>
			<NumberDisplay messageLeft="CA" numberToDisplay={12} isLeftDark={true} />
		</div>
	))
	.add('With Right Value', () => (
		<div css={{ padding: '50px' }}>
			<NumberDisplay
				messageLeft="CA"
				numberToDisplay={12}
				isLeftDark={true}
				messageRight={'-5'}
			/>
		</div>
	))
	.add('Ligth With Right Value', () => (
		<div css={{ padding: '50px' }}>
			<NumberDisplay
				messageLeft="CA"
				numberToDisplay={12}
				messageRight={'-5'}
			/>
		</div>
	));
