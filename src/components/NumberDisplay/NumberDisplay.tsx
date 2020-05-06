/** @jsx jsx */
import { jsx } from '@emotion/core';
import { NumberDisplayInfo } from './NumberDisplayInfo';
import { overridings as theme } from '../../themes/theme';

interface INumberDisplay {
	numberToDisplay: number;
	messageLeft?: string | number;
	messageRight?: string | number;
	isLeftDark?: boolean;
}

export const NumberDisplay: React.FC<INumberDisplay> = (props) => {
	const {
		messageLeft,
		messageRight,
		isLeftDark = false,
		numberToDisplay,
	} = props;

	return (
		<div
			css={{
				width: '70px',
				height: '70px',
				transform: 'rotate(45deg)',
				border: '4px solid',
				borderColor: isLeftDark
					? theme.palette.primary.main
					: theme.palette.primary.dark,
				position: 'relative',
			}}
		>
			<div
				css={{
					width: '65px',
					height: '62px',
					transform: 'rotate(-45deg)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<span
					css={{
						fontSize: '28px',
					}}
				>
					{numberToDisplay}
				</span>
				{messageLeft && (
					<NumberDisplayInfo
						isLeft={true}
						message={messageLeft}
						isLeftDark={isLeftDark}
					/>
				)}
				{messageRight && (
					<NumberDisplayInfo
						isLeft={false}
						message={messageRight}
						isLeftDark={false}
					/>
				)}
			</div>
		</div>
	);
};
