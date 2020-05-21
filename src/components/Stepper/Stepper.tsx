/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';

interface Stepper {
	currentStep: number;
}

export const Stepper: React.FC<Stepper> = (props) => {
	const { currentStep } = props;
	const { formatMessage } = useIntl();
	return (
		<Typography component="p" align="center" gutterBottom>
			{formatMessage(
				{ id: 'common.steps' },
				{ current: currentStep, total: 5 },
			)}
		</Typography>
	);
};
