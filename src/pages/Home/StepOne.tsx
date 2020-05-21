/** @jsx jsx */
import { jsx } from '@emotion/core';
import Card from '@material-ui/core/Card';
import {
	makeStyles,
	createStyles,
	CardContent,
	FormControl,
} from '@material-ui/core';
import { useIntl } from 'react-intl';
import { useRef, Dispatch, SetStateAction, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TextInput } from '../../components/TextInput/TextInput';
import { actions } from '../../redux/reducers/playerInfosSlice';
import React from 'react';
import { Stepper } from '../../components/Stepper/Stepper';

const useStyle = makeStyles(() =>
	createStyles({
		root: {
			marginBottom: 20,
		},
	}),
);

interface IStepOne {
	currentStep: number;
	shouldSubmit: boolean;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	setSubmit: Dispatch<SetStateAction<boolean>>;
}

export const StepOne: React.FC<IStepOne> = (props) => {
	const { currentStep, shouldSubmit, setCurrentStep, setSubmit } = props;

	const classes = useStyle();
	const { formatMessage } = useIntl();
	const inputCharaterName = useRef<HTMLInputElement>();
	const inputPlayerName = useRef<HTMLInputElement>();
	const dispatch = useDispatch();

	const { setCharacterName, setPlayerName } = actions;

	useLayoutEffect(() => {
		if (shouldSubmit) {
			if (inputPlayerName && inputPlayerName.current) {
				dispatch(setPlayerName(inputPlayerName.current.value));
			}
			if (inputCharaterName && inputCharaterName.current) {
				dispatch(setCharacterName(inputCharaterName.current.value));
			}

			setCurrentStep(2);
			setSubmit(false);
		}
	}, [
		shouldSubmit,
		dispatch,
		setPlayerName,
		setCharacterName,
		setCurrentStep,
		setSubmit,
	]);

	return (
		<Card className={classes.root} raised={true} elevation={24}>
			<CardContent>
				<Stepper currentStep={currentStep} />
				<div
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<FormControl>
						<TextInput
							ref={inputPlayerName}
							label={formatMessage({ id: 'common.player.name' })}
						/>
						<TextInput
							ref={inputCharaterName}
							label={formatMessage({ id: 'common.character.name' })}
						/>
					</FormControl>
				</div>
			</CardContent>
		</Card>
	);
};
