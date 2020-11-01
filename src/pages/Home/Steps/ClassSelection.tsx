/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useLayoutEffect, Dispatch, SetStateAction } from 'react';
import { Card, makeStyles, createStyles, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import CardContent from '@material-ui/core/CardContent';

import { Stepper } from '../../../components/Stepper/Stepper';
import { ITileInfo } from '../../../models/interface/ancestries';
import { EAbility } from '../../../models/enum/ability';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/reducers/characterInfosSlice';
import { useIntl } from 'react-intl';
import { Tile } from '../../../components/Tile/Tile';

interface IClassSelection {
	currentStep: number;
	shouldSubmit: boolean;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	setSubmit: Dispatch<SetStateAction<boolean>>;
}

const useStyle = makeStyles(() =>
	createStyles({
		root: {
			marginBottom: 20,
		},
	}),
);

export const ClassSelection: React.FC<IClassSelection> = (props) => {
	const { currentStep, shouldSubmit, setCurrentStep, setSubmit } = props;

	const classes = useStyle();
	const dispatch = useDispatch();
	const { setClass, setClassAbilityFlaw, setClassAbilityBoost } = actions;
	const [characterClass, setCharacterClass] = useState<Array<ITileInfo>>([
		{
			id: 1,
			name: 'alchemist',
			imageUrl: 'alchemist.png',
			ancestryAbilityBoost: [EAbility.INT],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 2,
			name: 'barbarian',
			imageUrl: 'barbarian.jpg',
			ancestryAbilityBoost: [EAbility.STR],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 3,
			name: 'bard',
			imageUrl: 'bard.jpg',
			ancestryAbilityBoost: [EAbility.CHA],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 4,
			name: 'champion',
			imageUrl: 'champion.jpg',
			ancestryAbilityBoost: [EAbility.STR],
			ancestryAbilityFlaw: [EAbility.CHA, EAbility.CON],
			isClicked: false,
		},
		{
			id: 5,
			name: 'cleric',
			imageUrl: 'cleric.jpg',
			ancestryAbilityBoost: [EAbility.WIS],
			ancestryAbilityFlaw: [EAbility.CHA, EAbility.CON],
			isClicked: false,
		},
		{
			id: 6,
			name: 'druid',
			imageUrl: 'druid.jpg',
			ancestryAbilityBoost: [EAbility.WIS],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 7,
			name: 'fighter',
			imageUrl: 'fighter.jpg',
			ancestryAbilityBoost: [EAbility.DEX, EAbility.STR],
			ancestryAbilityFlaw: [EAbility.CON],
			isClicked: false,
		},
		{
			id: 8,
			name: 'monk',
			imageUrl: 'monk.jpg',
			ancestryAbilityBoost: [EAbility.DEX, EAbility.STR],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.WIS],
			isClicked: false,
		},
		{
			id: 9,
			name: 'ranger',
			imageUrl: 'ranger.jpg',
			ancestryAbilityBoost: [EAbility.DEX, EAbility.STR],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.WIS],
			isClicked: false,
		},
		{
			id: 10,
			name: 'rogue',
			imageUrl: 'rogue.jpg',
			ancestryAbilityBoost: [EAbility.DEX],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.CHA],
			isClicked: false,
		},
		{
			id: 11,
			name: 'sorcerer',
			imageUrl: 'sorcerer.jpg',
			ancestryAbilityBoost: [EAbility.CHA],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 12,
			name: 'wizard',
			imageUrl: 'wizard.png',
			ancestryAbilityBoost: [EAbility.INT],
			ancestryAbilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
	]);

	const [isError, setIsError] = useState(false);

	useLayoutEffect(() => {
		if (shouldSubmit) {
			const clickedAncestry = characterClass.find(
				(ancestry) => ancestry.isClicked === true,
			);

			if (!clickedAncestry) {
				setIsError(true);
				return setSubmit(false);
			}

			setCurrentStep(currentStep + 1);
			return setSubmit(false);
		}
	}, [shouldSubmit, dispatch, setCurrentStep, setSubmit, characterClass, currentStep]);

	const { formatMessage } = useIntl();

	const handleTileClick = (id: number) => {
		const selectedAncestry = characterClass.find(
			(ancestry) => ancestry.id === id,
		);
		const newAncestries = characterClass.map((ancestry) => {
			if (ancestry.id === id) {
				ancestry = {
					...ancestry,
					isClicked: true,
				};
			} else if (ancestry.isClicked) {
				ancestry = {
					...ancestry,
					isClicked: false,
				};
			}

			return ancestry;
		});

		dispatch(setClass(selectedAncestry?.name));
		dispatch(setClassAbilityFlaw(selectedAncestry?.ancestryAbilityFlaw));
		dispatch(setClassAbilityBoost(selectedAncestry?.ancestryAbilityBoost));
		setCharacterClass(newAncestries);
	};

	const sliderSettings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: true,
		swipeToSlide: true,
		swipe: true,
	};

	return (
		<div>
			<Card className={classes.root} raised={true} elevation={24}>
				<CardContent>
					<Stepper currentStep={currentStep} />

					{isError && (
						<Typography align="center" color="error">
							{formatMessage({ id: 'class.error' })}
						</Typography>
					)}
					<div>
						<Slider {...sliderSettings}>
							{characterClass.map((ancestry) => (
								<Tile
									ancestry={ancestry}
									handleClick={handleTileClick}
									key={ancestry.id}
									tileType="class"
								/>
							))}
						</Slider>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
