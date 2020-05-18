/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TextField } from '@material-ui/core';
import React from 'react';

interface ITextInput {
	label?: string;
	ref?: any;
}

export const TextInput: React.FC<ITextInput> = React.forwardRef(
	(props, ref) => {
		const { label } = props;
		return (
			<div css={{ display: 'flex' }}>
				<TextField label={label} inputRef={ref} />
			</div>
		);
	},
);
