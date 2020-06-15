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
	const { setAncestry, setAbilityFlaw, setAbilityBoost } = actions;
	const [characterClass, setCharacterClass] = useState<Array<ITileInfo>>([
		{
			id: 1,
			name: 'alchemist',
			imageUrl: 'alchemist.png',
			abilityBoost: [EAbility.INT],
			abilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 2,
			name: 'barbarian',
			imageUrl: 'barbarian.jpg',
			abilityBoost: [EAbility.STR],
			abilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 3,
			name: 'bard',
			imageUrl: 'bard.jpg',
			abilityBoost: [EAbility.CHA],
			abilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 4,
			name: 'champion',
			imageUrl: 'champion.jpg',
			abilityBoost: [EAbility.STR],
			abilityFlaw: [EAbility.CHA, EAbility.CON],
			isClicked: false,
		},
		{
			id: 5,
			name: 'cleric',
			imageUrl: 'cleric.jpg',
			abilityBoost: [EAbility.WIS],
			abilityFlaw: [EAbility.CHA, EAbility.CON],
			isClicked: false,
		},
		{
			id: 6,
			name: 'druid',
			imageUrl: 'druid.jpg',
			abilityBoost: [EAbility.WIS],
			abilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 7,
			name: 'fighter',
			imageUrl: 'fighter.jpg',
			abilityBoost: [EAbility.DEX, EAbility.STR],
			abilityFlaw: [EAbility.CON],
			isClicked: false,
		},
		{
			id: 8,
			name: 'monk',
			imageUrl: 'monk.jpg',
			abilityBoost: [EAbility.DEX, EAbility.STR],
			abilityFlaw: [EAbility.CON, EAbility.WIS],
			isClicked: false,
		},
		{
			id: 9,
			name: 'ranger',
			imageUrl: 'ranger.jpg',
			abilityBoost: [EAbility.DEX, EAbility.STR],
			abilityFlaw: [EAbility.CON, EAbility.WIS],
			isClicked: false,
		},
		{
			id: 10,
			name: 'rogue',
			imageUrl: 'rogue.jpg',
			abilityBoost: [EAbility.DEX],
			abilityFlaw: [EAbility.CON, EAbility.CHA],
			isClicked: false,
		},
		{
			id: 11,
			name: 'sorcerer',
			imageUrl: 'sorcerer.jpg',
			abilityBoost: [EAbility.CHA],
			abilityFlaw: [EAbility.CON, EAbility.DEX],
			isClicked: false,
		},
		{
			id: 12,
			name: 'wizard',
			imageUrl: 'wizard.png',
			abilityBoost: [EAbility.INT],
			abilityFlaw: [EAbility.CON, EAbility.DEX],
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
	}, [shouldSubmit, dispatch, setCurrentStep, setSubmit]);

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

		dispatch(setAncestry(selectedAncestry?.name));
		dispatch(setAbilityFlaw(selectedAncestry?.abilityFlaw));
		dispatch(setAbilityBoost(selectedAncestry?.abilityBoost));
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
							{formatMessage({ id: 'ancestry.error' })}
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
