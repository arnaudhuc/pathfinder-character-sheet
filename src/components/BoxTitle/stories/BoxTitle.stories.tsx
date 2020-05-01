/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { BoxTitle } from '../BoxTitle';

storiesOf('BoxTitle', module)
	.add('Default', () => <BoxTitle title="Valeur" />)
	.add('Light', () => <BoxTitle title="Valeur" isLight={true} />);
