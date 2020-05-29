/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TextField } from '@material-ui/core';
import React from 'react';

interface ITextInput {
	label?: string;
	ref?: any;
	isError?: boolean;
	errorMessage?: string;
	handleOnChange?: () => void;
}

export const TextInput: React.FC<ITextInput> = React.forwardRef(
	(props, ref) => {
		const { label, isError = false, errorMessage = '', handleOnChange } = props;
		return (
			<div css={{ display: 'flex' }}>
				<TextField
					label={label}
					inputRef={ref}
					error={isError}
					helperText={errorMessage}
					onChange={handleOnChange}
				/>
			</div>
		);
	},
);
