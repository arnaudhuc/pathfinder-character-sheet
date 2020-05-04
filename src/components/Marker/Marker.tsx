/** @jsx jsx */
import { jsx } from '@emotion/core';
import { common } from '../../style/common';

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
						border: `5px solid ${common.grey}`,
						width: '20px',
						height: '20px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						transform: 'rotate(45deg)',
						position: 'absolute',
						top: index % 2 ? '10px' : '0',
						left: `${index * 30}px`,
						color: common.greyDark,
					}}
				>
					<span css={{ transform: 'rotate(-45deg)' }}>{marker}</span>
				</div>
			))}
		</div>
	);
};
