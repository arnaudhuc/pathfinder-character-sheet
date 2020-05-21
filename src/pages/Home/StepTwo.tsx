/** @jsx jsx */
import { jsx } from '@emotion/core';
import Slider from 'react-slick';
import { useEffect, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { Stepper } from '../../components/Stepper/Stepper';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, createStyles, Card } from '@material-ui/core';
import ancestries from './Ancestries.json';
import { Tile } from '../../components/Tile/Tile';

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

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	useEffect(() => {}, [shouldSubmit, dispatch, setCurrentStep, setSubmit]);

	const handleTileClick = (id: string) => {
		console.log(id);
	};

	return (
		<div>
			<Card className={classes.root} raised={true} elevation={24}>
				<CardContent>
					<Stepper currentStep={currentStep} />
					<div>
						<Slider {...settings}>
							{ancestries.map((ancestry) => (
								<Tile
									imgUrl={ancestry.imageUrl}
									title={ancestry.name}
									description={ancestry.name}
									handleClick={handleTileClick}
									isClicked={true}
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
