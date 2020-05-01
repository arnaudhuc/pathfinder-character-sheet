/** @jsx jsx */
import { jsx } from '@emotion/core';

interface IMarker {
	markers: string[];
}

export const Marker: React.FC<IMarker> = (props) => {
	const { markers } = props;
	return (
		<div
			css={{
				position: 'relative',
			}}
		>
			{markers.map((marker, index) => (
				<div
					key={index}
					css={{
						border: '5px solid #bdbdbd',
						width: '20px',
						height: '20px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						transform: 'rotate(45deg)',
						position: 'absolute',
						top: index % 2 ? '10px' : '0',
						left: `${index * 30}px`,
						color: '#8d8d8d',
					}}
				>
					<span css={{ transform: 'rotate(-45deg)' }}>{marker}</span>
				</div>
			))}
		</div>
	);
};
