/** @jsx jsx */
import { jsx } from '@emotion/core';

interface ITextInput {
	label?: string;
}

export const TextInput: React.FC<ITextInput> = (props) => {
	const { label = '' } = props;

	return (
		<div css={{ display: 'flex' }}>
			<p css={{ margin: '0', marginRight: '10px', fontSize: '20px' }}>
				{label}
			</p>
			<input
				css={{
					border: '0',
					borderBottom: '2px solid #bdbdbd',
					width: '100%',
					height: '20px',
					fontSize: '18px',
				}}
				type="text"
			/>
		</div>
	);
};
