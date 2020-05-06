/** @jsx jsx */
import { jsx } from '@emotion/core';
import Button from '@material-ui/core/Button';
import { EButtonType } from '../../enums/button';

interface IButton {
	value: string;
	handleClick: () => void;
	type?: EButtonType;
}

export const CustomButton: React.FC<IButton> = (props) => {
	const { value, handleClick, type = EButtonType.DEFAULT } = props;
	return (
		<div>
			<Button onClick={handleClick} variant="contained" color={type}>
				{value}
			</Button>
		</div>
	);
};
