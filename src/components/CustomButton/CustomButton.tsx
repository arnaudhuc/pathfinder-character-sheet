/** @jsx jsx */
import { jsx } from '@emotion/core';
import Button from '@material-ui/core/Button';
import { EColor } from '../../enums/button';

interface IButton {
	value: string;
	handleClick: () => void;
	type?: EColor;
}

export const CustomButton: React.FC<IButton> = (props) => {
	const { value, handleClick, type = EColor.DEFAULT } = props;
	return (
		<div {...props}>
			<Button onClick={handleClick} variant="contained" color={type}>
				{value}
			</Button>
		</div>
	);
};
