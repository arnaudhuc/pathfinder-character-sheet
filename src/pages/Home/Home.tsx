/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { CustomButton } from '../../components/CustomButton/CustomButton';
import { EColor } from '../../enums/button';
import { characterName } from '../../redux/selectors/playerSelectors';
import { StepOne } from './StepOne';

export const Home = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [shouldSumbit, setSubmit] = useState(false);

	let characterNameSelector = useSelector(characterName);

	const handleNextButton = () => {
		setSubmit(true);
	};

	const { formatMessage } = useIntl();

	return (
		<div>
			<Typography component="h1" align="center" variant="h2" gutterBottom>
				{formatMessage({ id: 'common.home' })}
			</Typography>

			<StepOne
				currentStep={currentStep}
				setCurrentStep={setCurrentStep}
				shouldSubmit={shouldSumbit}
			/>

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
