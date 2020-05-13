/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent, makeStyles, createStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CustomButton } from '../../components/CustomButton/CustomButton';
import { EColor } from '../../enums/button';
import { TextInput } from '../../components/TextInput/TextInput';
import { actions } from '../../redux/reducers/playerReducer';

const useStyle = makeStyles(() =>
	createStyles({
		root: {
			marginBottom: 20,
		},
	}),
);

export const Home = () => {
	const { setCharacterName } = actions;
	const dispatch = useDispatch();
	const classes = useStyle();

	let [currentStep, setCurrentStep] = useState(1);

	const handleNextButton = () => {
		setCurrentStep(currentStep++);
		dispatch(setCharacterName({ name: 'test' }));
	};

	const { formatMessage } = useIntl();

	return (
		<div>
			<Typography component="h1" align="center" variant="h2" gutterBottom>
				{formatMessage({ id: 'common.home' })}
			</Typography>

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
						<TextInput label={formatMessage({ id: 'common.player.name' })} />
						<TextInput label={formatMessage({ id: 'common.character.name' })} />
					</div>
				</CardContent>
			</Card>

			<div css={{ display: 'flex', justifyContent: 'center' }}>
				<CustomButton
					handleClick={handleNextButton}
					value={formatMessage({ id: 'common.next' })}
					type={EColor.PRIMARY}
				/>
			</div>
		</div>
	);
};
