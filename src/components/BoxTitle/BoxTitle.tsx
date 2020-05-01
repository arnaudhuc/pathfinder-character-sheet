/** @jsx jsx */
import { jsx } from '@emotion/core';

interface IBoxTitle {
	title: string;
	isLight?: boolean;
}

export const BoxTitle: React.FC<IBoxTitle> = (props) => {
	const { title, isLight = false } = props;
	return (
		<div
			css={{
				background: isLight ? '#8d8d8d' : 'black',
				color: 'white',
				height: '30px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: isLight ? 'left' : 'center',
				textTransform: 'uppercase',
				fontSize: '20px',
				paddingLeft: isLight ? '10px' : '0',
			}}
		>
			{title}
		</div>
	);
};
