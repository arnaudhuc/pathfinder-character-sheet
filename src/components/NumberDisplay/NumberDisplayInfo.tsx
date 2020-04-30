/** @jsx jsx */
import { jsx } from '@emotion/core';

interface NumberDisplayInfoLeft {
	message: string | number;
	isLeftDark: boolean;
	isLeft: boolean;
}

const getBackgroundColor = (isLeft: boolean, isLeftDark: boolean): string => {
	if (isLeftDark) return '#000';
	if (!isLeft) return '#fff';
	return '#bdbdbd';
};

const border = (isLeft: boolean) => {
	if (!isLeft) {
		return {
			border: '2px solid black',
		};
	}
};

export const NumberDisplayInfo: React.FC<NumberDisplayInfoLeft> = (props) => {
	const { message, isLeftDark, isLeft } = props;
	return (
		<div
			css={{
				backgroundColor: getBackgroundColor(isLeft, isLeftDark),
				width: isLeft ? '50px' : '46px',
				height: isLeft ? '50px' : '46px',
				transform: 'rotate(45deg)',
				position: 'absolute',
				left: isLeft ? '-28px' : '46px',
				top: '48px',
				...border(isLeft),
			}}
		>
			<div
				css={{
					transform: 'rotate(-45deg)',
					color: isLeft ? '#fff' : '#000',
					width: isLeft ? '50px' : '46px',
					height: isLeft ? '50px' : '46px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<span>{message}</span>
			</div>
		</div>
	);
};
