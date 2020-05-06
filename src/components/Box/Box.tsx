/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
	Card,
	CardContent,
	makeStyles,
	Typography,
	Divider,
} from '@material-ui/core';

interface IBox {
	handleClick: () => void;
	children: React.ReactNode;
}

export const Box: React.FC<IBox> = (props) => {
	const { handleClick, children } = props;

	const useStyles = makeStyles({
		root: {
			minWidth: 275,
			width: '100%',
		},
		title: {
			fontSize: 14,
		},
	});

	const classes = useStyles();

	return (
		<Card onClick={handleClick} className={classes.root}>
			<CardContent>
				<Typography component="h2">Test</Typography>
				<Divider variant="fullWidth" />
				{children}
			</CardContent>
		</Card>
	);
};
