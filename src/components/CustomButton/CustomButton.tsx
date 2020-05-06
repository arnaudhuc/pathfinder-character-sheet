/** @jsx jsx */
import { jsx } from '@emotion/core';
import Button from '@material-ui/core/Button';

interface IButton {
	value: string;
	handleClick: () => void;
}

export const CustomButton: React.FC<IButton> = (props) => {
	const { value, handleClick } = props;
	return (
		<div>
			<Button onClick={handleClick} variant="contained" color="primary">
				{value}
			</Button>
		</div>
	);
};
