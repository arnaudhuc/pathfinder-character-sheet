/** @jsx jsx */
import { jsx } from '@emotion/core';
import Slider from 'react-slick';
import {
	useEffect as useLayoutEffect,
	Dispatch,
	SetStateAction,
	useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Stepper } from '../../../components/Stepper/Stepper';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, createStyles, Card, Typography } from '@material-ui/core';
import { actions } from '../../../redux/reducers/characterInfosSlice';
import { Tile } from '../../../components/Tile/Tile';
import { ITileInfo } from '../../../models/interface/ancestries';
import { EAbility } from '../../../models/enum/ability';
import { useIntl } from 'react-intl';

import { sliderSettings } from '../../../conf/slick';

interface IAncestrySelection {
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

export const AncestrySelection: React.FC<IAncestrySelection> = (props) => {
	const { currentStep, shouldSubmit, setCurrentStep, setSubmit } = props;

	const classes = useStyle();
	const dispatch = useDispatch();
	const { setAncestry, setAbilityFlaw, setAbilityBoost } = actions;
	const [ancestries, setAncestries] = useState<Array<ITileInfo>>([
		{
			id: 1,
			name: 'elf',
			imageUrl: 'elf.jpg',
			abilityBoost: [EAbility.DEX, EAbility.INT, EAbility.FRE],
			abilityFlaw: [EAbility.CON],
			isClicked: false,
		},
		{
			id: 2,
			name: 'dwarf',
			imageUrl: 'dwarf.jpg',
			abilityBoost: [EAbility.CON, EAbility.WIS, EAbility.FRE],
			abilityFlaw: [EAbility.CHA],
			isClicked: false,
		},
		{
			id: 3,
			name: 'gnome',
			imageUrl: 'gnome.png',
			abilityBoost: [EAbility.CON, EAbility.CHA, EAbility.FRE],
			abilityFlaw: [EAbility.STR],
			isClicked: false,
		},
		{
			id: 4,
			name: 'goblin',
			imageUrl: 'goblin.jpg',
			abilityBoost: [EAbility.DEX, EAbility.CHA, EAbility.FRE],
			abilityFlaw: [EAbility.WIS],
			isClicked: false,
		},
		{
			id: 5,
			name: 'halfling',
			imageUrl: 'halfling.jpg',
			abilityBoost: [EAbility.DEX, EAbility.WIS, EAbility.FRE],
			abilityFlaw: [EAbility.STR],
			isClicked: false,
		},
		{
			id: 6,
			name: 'human',
			imageUrl: 'human.jpg',
			abilityBoost: [EAbility.FRE, EAbility.FRE],
			abilityFlaw: [EAbility.NUL],
			isClicked: false,
		},
	]);

	const [isError, setIsError] = useState(false);

	useLayoutEffect(() => {
		if (shouldSubmit) {
			const clickedAncestry = ancestries.find(
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
		const selectedAncestry = ancestries.find((ancestry) => ancestry.id === id);
		const newAncestries = ancestries.map((ancestry) => {
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
		setAncestries(newAncestries);
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
							{ancestries.map((ancestry) => (
								<Tile
									ancestry={ancestry}
									handleClick={handleTileClick}
									key={ancestry.id}
									tileType="ancestry"
								/>
							))}
						</Slider>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
