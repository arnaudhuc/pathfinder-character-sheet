/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { CustomButton } from '../../components/CustomButton/CustomButton';
import { EColor } from '../../enums/button';
import { characterName } from '../../redux/selectors/playerSelectors';
import { CharacterName } from './Steps/CharacterName';
import { AncestrySelection } from './Steps/AncestrySelection';
import { ValueAbility } from './Steps/ValueAbility';
import { Error } from './Error';
import { ClassSelection } from './Steps/ClassSelection';

export const Home = () => {
	const [currentStep, setCurrentStep] = useState(4);
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

			{(() => {
				switch (currentStep) {
					case 1:
						return (
							<CharacterName
								currentStep={currentStep}
								setCurrentStep={setCurrentStep}
								shouldSubmit={shouldSumbit}
								setSubmit={setSubmit}
							/>
						);
					case 2:
						return (
							<AncestrySelection
								currentStep={currentStep}
								setCurrentStep={setCurrentStep}
								shouldSubmit={shouldSumbit}
								setSubmit={setSubmit}
							/>
						);
					case 3:
						return (
							<ClassSelection
								currentStep={currentStep}
								setCurrentStep={setCurrentStep}
								shouldSubmit={shouldSumbit}
								setSubmit={setSubmit}
							/>
						);
					case 4:
						return (
							<ValueAbility
								currentStep={currentStep}
								setCurrentStep={setCurrentStep}
								shouldSubmit={shouldSumbit}
								setSubmit={setSubmit}
							/>
						);
					default:
						return <Error />;
				}
			})()}

			<div css={{ display: 'flex', justifyContent: 'center' }}>
				{characterNameSelector}
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
