/** @jsx jsx */
import { jsx } from '@emotion/core';
import Slider from 'react-slick';
import { useEffect, Dispatch, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stepper } from '../../components/Stepper/Stepper';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, createStyles, Card } from '@material-ui/core';
import ancestries from './Ancestries.json';
import { Tile } from '../../components/Tile/Tile';
import { IAncestries } from '../../models/interface/ancestries';
import { EAbility } from '../../models/enum/ability';

interface StepTwo {
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

export const StepTwo: React.FC<StepTwo> = (props) => {
	const { currentStep, shouldSubmit, setCurrentStep, setSubmit } = props;

	const classes = useStyle();
	const dispatch = useDispatch();
	const [ancestries, setAncestries] = useState<Array<IAncestries>>([
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

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	useEffect(() => {}, [shouldSubmit, dispatch, setCurrentStep, setSubmit]);

	const handleTileClick = (id: number) => {
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

		setAncestries(newAncestries);
	};

	return (
		<div>
			<Card className={classes.root} raised={true} elevation={24}>
				<CardContent>
					<Stepper currentStep={currentStep} />
					<div>
						<Slider {...sliderSettings}>
							{ancestries.map((ancestry) => (
								<Tile
									ancestry={ancestry}
									handleClick={handleTileClick}
									key={ancestry.id}
								/>
							))}
						</Slider>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
