/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Divider } from '@material-ui/core';

import { ITileInfo } from '../../models/interface/ancestries';

interface ITile {
	handleClick: (id: number) => void;
	ancestry: ITileInfo;
}

export const Tile: React.FC<ITile> = (props) => {
	const { ancestry, handleClick } = props;
	const { formatMessage } = useIntl();

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
			css={{
				height: '500px',
			}}
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
					css={{
						backgroundPosition: 'top',
					}}
				/>
				<CardContent css={{ paddingTop: '0' }}>
					<Typography gutterBottom variant="h5" component="h2" align="center">
						{formatMessage({ id: `ancestry.${ancestry.name}` })}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						css={{ height: '100px' }}
					>
						{formatMessage({ id: `ancestry.${ancestry.name}.description` })}
					</Typography>
					<Divider variant="fullWidth" />
					<Typography color="secondary">
						{formatMessage({ id: 'bonus' })} :{' '}
						{ancestry.abilityBoost.map((anc, index) => {
							return (
								<Typography key={index} component="strong" color="secondary">
									{formatMessage({ id: `common.${anc}` })}{' '}
								</Typography>
							);
						})}
					</Typography>
					<Typography color="error">
						{formatMessage({ id: 'malus' })} :{' '}
						{ancestry.abilityFlaw.map((anc, index) => {
							return (
								<Typography key={index} component="strong" color="error">
									{formatMessage({ id: `common.${anc}` })}{' '}
								</Typography>
							);
						})}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
