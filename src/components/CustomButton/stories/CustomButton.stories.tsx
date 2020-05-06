/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { CustomButton } from '../CustomButton';
import { EButtonType } from '../../../enums/button';

storiesOf('customButton', module)
	.add('Default', () => <CustomButton value="next" handleClick={() => true} />)
	.add('Primary', () => (
		<CustomButton
			value="next"
			handleClick={() => true}
			type={EButtonType.PRIMARY}
		/>
	))
	.add('Secondary', () => (
		<CustomButton
			value="next"
			handleClick={() => true}
			type={EButtonType.SECONDARY}
		/>
	));
