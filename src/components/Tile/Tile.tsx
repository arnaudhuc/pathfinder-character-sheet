/* eslint-disable react/prop-types */
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
import { IAncestries } from '../../models/interface/ancestries';

interface ITile {
	handleClick: (id: number) => void;
	ancestry: IAncestries;
}

export const Tile: React.FC<ITile> = (props) => {
	const { ancestry, handleClick } = props;

	const useStyles = makeStyles({
		root: {
			maxWidth: 240,
			border: ancestry.isClicked
				? `2px solid ${green.A200}`
				: '1px solid rgba(0, 0, 0, 0.12)',
			position: 'relative',
			overflow: 'unset',
		},
	});

	const classes = useStyles();

	const cardUseStyles = makeStyles({
		root: {
			height: ancestry.isClicked ? 270 : 250,
			backgroundPosition: 'center',
		},
	});

	const cardClasses = cardUseStyles();

	const handleCardClick = () => {
		handleClick(ancestry.id);
	};

	return (
		<Card
			onClick={handleCardClick}
			className={classes.root}
			variant={ancestry.isClicked ? 'elevation' : 'outlined'}
		>
			{ancestry.isClicked && (
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
					image={`/images/${ancestry.imageUrl}`}
					title={ancestry.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2" align="center">
						{ancestry.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{ancestry.name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
