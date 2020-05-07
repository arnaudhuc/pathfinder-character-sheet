/** @jsx jsx */
import { jsx } from '@emotion/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { EColor } from '../../enums/button';

interface IBoxTitle {
	title: string;
	color?: EColor;
}

export const BoxTitle: React.FC<IBoxTitle> = (props) => {
	const { title, color = EColor.PRIMARY } = props;
	return (
		<AppBar position="fixed" color={color}>
			<Toolbar>
				<Typography variant="h6" color="inherit" component="h2">
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
