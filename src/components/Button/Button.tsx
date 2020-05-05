/** @jsx jsx */
import { jsx } from '@emotion/core';
import { common } from '../../style/common';

interface IButton {
	value: string;
	handleClick: () => void;
}

export const Button: React.FC<IButton> = (props) => {
	const { value, handleClick } = props;
	return (
		<div>
			<input
				onClick={handleClick}
				css={{
					border: `1px solid ${common.black}`,
					outline: 'none',
					height: '50px',
					width: '150px',
					borderRadius: '5px',
					fontSize: '18px',
					':hover': {
						backgroundColor: common.greyLight,
					},
					':active': {
						backgroundColor: common.grey,
					},
				}}
				type="button"
				value={value}
			/>
		</div>
	);
};
