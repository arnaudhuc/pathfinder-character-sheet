/** @jsx jsx */
import { jsx } from '@emotion/core';
import { common } from '../../style/common';
import { useState } from 'react';
import { green } from '@material-ui/core/colors';

interface IMarkerUnit {
	index: number;
	marker: string;
}

export const MarkerUnit: React.FC<IMarkerUnit> = (props) => {
	const { index, marker } = props;

	const [isSelected, setSelected] = useState(false);

	const handleClick = () => {
		setSelected(!isSelected);
	};

	return (
		<div
			css={{
				border: `3px solid ${isSelected ? green.A200 : common.grey}`,
				width: '30px',
				height: '30px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transform: 'rotate(45deg)',
				position: 'absolute',
				top: index % 2 ? '10px' : '0',
				left: `${index * 30}px`,
				color: common.greyDark,
			}}
			onClick={handleClick}
		>
			<span css={{ transform: 'rotate(-45deg)' }}>{marker}</span>
		</div>
	);
};
