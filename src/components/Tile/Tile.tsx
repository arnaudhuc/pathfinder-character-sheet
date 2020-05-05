/** @jsx jsx */
import { jsx } from '@emotion/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface ITile {
	imgUrl: string;
	title: string;
	description: string;
	handleClick: () => void;
	isClicked: boolean;
}

export const Tile: React.FC<ITile> = (props) => {
	const { imgUrl, title, description, handleClick, isClicked } = props;

	const useStyles = makeStyles({
		root: {
			maxWidth: 240,
			border: isClicked
				? `2px solid ${green.A200}`
				: '1px solid rgba(0, 0, 0, 0.12)',
			position: 'relative',
			overflow: 'unset',
		},
	});

	const classes = useStyles();

	const cardUseStyles = makeStyles({
		root: {
			height: isClicked ? 270 : 250,
			backgroundPosition: 'center',
		},
	});

	const cardClasses = cardUseStyles();

	return (
		<Card
			onClick={handleClick}
			className={classes.root}
			variant={isClicked ? 'elevation' : 'outlined'}
		>
			{isClicked && (
				<CheckCircleIcon
					style={{
						color: green.A200,
						backgroundColor: 'white',
						position: 'absolute',
						borderRadius: '100%',
						top: '-5px',
						right: '-5px',
						zIndex: 1,
					}}
				/>
			)}
			<CardActionArea>
				<CardMedia
					className={cardClasses.root}
					image={imgUrl}
					title={description}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2" align="center">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
