/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent, makeStyles, createStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton } from '../../components/CustomButton/CustomButton';
import { EColor } from '../../enums/button';
import { TextInput } from '../../components/TextInput/TextInput';
import { actions } from '../../redux/reducers/playerInfosSlice';
import { characterName } from '../../redux/selectors/playerSelectors';

const useStyle = makeStyles(() =>
	createStyles({
		root: {
			marginBottom: 20,
		},
	}),
);

export const Home = () => {
	const { setCharacterName, setPlayerName } = actions;
	const dispatch = useDispatch();
	const classes = useStyle();

	const [currentStep, setCurrentStep] = useState(1);
	let [name, setName] = useState('');

	let characterNameSelector = useSelector(characterName);

	const handleNextButton = () => {
		setCurrentStep(currentStep + 1);
		dispatch(setCharacterName('test'));
		dispatch(setPlayerName('testos'));
		setName('toto');
	};

	const { formatMessage } = useIntl();

	useEffect(() => {
		console.log(characterNameSelector);
	}, [characterNameSelector]);

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

					<Typography>
						characterNameSelector : {characterNameSelector}
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
