/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../TextInput';

storiesOf('TextInput', module)
	.add('Default', () => {
		return <TextInput label="Nom" />;
	})
	.add('Without label', () => {
		return <TextInput />;
	});
