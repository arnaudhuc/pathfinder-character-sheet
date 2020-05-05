/** @jsx jsx */
import { jsx } from '@emotion/core';
import { TextField } from '@material-ui/core';

interface ITextInput {
	label?: string;
}

export const TextInput: React.FC<ITextInput> = (props) => {
	const { label = '' } = props;

	return (
		<div css={{ display: 'flex' }}>
			<TextField label={label} />
		</div>
	);
};
