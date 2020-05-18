/** @jsx jsx */
import { jsx } from '@emotion/core';
import Card from '@material-ui/core/Card';
import {
	makeStyles,
	createStyles,
	CardContent,
	Typography,
	FormControl,
} from '@material-ui/core';
import { useIntl } from 'react-intl';
import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import { TextInput } from '../../components/TextInput/TextInput';
import { actions } from '../../redux/reducers/playerInfosSlice';

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
}

export const StepOne: React.FC<IStepOne> = (props) => {
	const { currentStep, shouldSubmit, setCurrentStep } = props;

	const classes = useStyle();
	const { formatMessage } = useIntl();
	const inputCharaterName = useRef('');
	const inputPlayerName = useRef('');
	const dispatch = useDispatch();

	const { setCharacterName, setPlayerName } = actions;

	useEffect(() => {
		if (shouldSubmit) {
			if (inputPlayerName && inputPlayerName.current) {
				// @ts-ignore
				dispatch(setPlayerName(inputPlayerName.current.value));
			}
			if (inputCharaterName && inputCharaterName.current) {
				// @ts-ignore
				dispatch(setCharacterName(inputCharaterName.current.value));
			}

			setCurrentStep(currentStep + 1);
		}
	}, [shouldSubmit]);

	return (
		<Card className={classes.root} raised={true} elevation={24}>
			<CardContent>
				<Typography component="p" align="center" gutterBottom>
					{formatMessage(
						{ id: 'common.steps' },
						{ current: currentStep, total: 'x' },
					)}
				</Typography>

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
