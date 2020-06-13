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
import { StepTwo } from './StepTwo';

export const Home = () => {
	const [currentStep, setCurrentStep] = useState(2);
	const [shouldSumbit, setSubmit] = useState(false);

	let characterNameSelector = useSelector(characterName);

	const handleNextButton = () => {
		setSubmit(true);
	};

	const handleBackButton = () => {
		setCurrentStep(currentStep - 1);
	};

	const { formatMessage } = useIntl();

	return (
		<div>
			<Typography component="h1" align="center" variant="h2" gutterBottom>
				{formatMessage({ id: 'common.home' })}
			</Typography>

			{currentStep === 1 && (
				<StepOne
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
					shouldSubmit={shouldSumbit}
					setSubmit={setSubmit}
				/>
			)}

			{currentStep === 2 && (
				<StepTwo
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
					shouldSubmit={shouldSumbit}
					setSubmit={setSubmit}
				/>
			)}

			<div css={{ display: 'flex', justifyContent: 'center' }}>
				{currentStep !== 1 && (
					<CustomButton
						handleClick={handleBackButton}
						value={formatMessage({ id: 'common.previous' })}
						type={EColor.SECONDARY}
						css={{
							marginRight: '20px',
						}}
					/>
				)}
				<CustomButton
					handleClick={handleNextButton}
					value={formatMessage({ id: 'common.next' })}
					type={EColor.PRIMARY}
				/>
			</div>
		</div>
	);
};
