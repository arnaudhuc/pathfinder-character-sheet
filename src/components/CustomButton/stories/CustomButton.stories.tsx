/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { CustomButton } from '../CustomButton';

storiesOf('customButton', module).add('Default', () => (
	<CustomButton value="next" handleClick={() => true} />
));
