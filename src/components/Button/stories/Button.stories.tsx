/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';

storiesOf('Button', module).add('Default', () => (
	<Button value="next" handleClick={() => true} />
));
