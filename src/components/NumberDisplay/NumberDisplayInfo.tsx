/** @jsx jsx */
import { jsx } from '@emotion/core';
import { overridings as theme } from '../../themes/theme';

interface NumberDisplayInfoLeft {
	message: string | number;
	isLeftDark: boolean;
	isLeft: boolean;
}

const getBackgroundColor = (isLeft: boolean, isLeftDark: boolean): string => {
	if (isLeftDark) return theme.palette.secondary.dark;
	if (!isLeft) return theme.palette.secondary.light;
	return theme.palette.secondary.main;
};

const border = (isLeft: boolean) => {
	if (!isLeft) {
		return {
			border: `2px solid ${theme.palette.secondary.light}`,
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
				left: isLeft ? '-32px' : '45px',
				top: isLeft ? '41px' : '43px',
				...border(isLeft),
			}}
		>
			<div
				css={{
					transform: 'rotate(-45deg)',
					color: isLeftDark ? '#fff' : theme.palette.secondary.contrastText,
					width: isLeft ? '50px' : '40px',
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
