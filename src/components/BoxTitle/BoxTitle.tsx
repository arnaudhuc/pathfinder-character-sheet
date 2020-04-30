/** @jsx jsx */
import { jsx } from '@emotion/core';

interface IBoxTitle {
	title: string;
}

export const BoxTitle: React.FC<IBoxTitle> = (props) => {
	const { title } = props;
	return (
		<div
			css={{
				background: 'black',
				color: 'white',
				height: '30px',
				textAlign: 'center',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textTransform: 'uppercase',
				fontSize: '20px',
			}}
		>
			{title}
		</div>
	);
};
