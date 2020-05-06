/** @jsx jsx */
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { BoxTitle } from '../BoxTitle';
import { EColor } from '../../../enums/button';

storiesOf('BoxTitle', module)
	.add('Default', () => <BoxTitle title="Valeur" color={EColor.PRIMARY} />)
	.add('Secondary', () => <BoxTitle title="Valeur" color={EColor.SECONDARY} />);
