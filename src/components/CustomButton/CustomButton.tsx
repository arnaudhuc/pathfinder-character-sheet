/** @jsx jsx */
import { jsx } from '@emotion/core';
import { common } from '../../style/common';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useMemo } from 'react';
import {
	createMuiTheme,
	useMediaQuery,
	ThemeProvider,
} from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';

interface IButton {
	value: string;
	handleClick: () => void;
}

export const CustomButton: React.FC<IButton> = (props) => {
	const { value, handleClick } = props;
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	const theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? 'dark' : 'light',
					primary: blue,
					secondary: green,
				},
			}),
		[prefersDarkMode],
	);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Button onClick={handleClick} variant="contained" color="primary">
					{value}
				</Button>
			</ThemeProvider>
		</div>
	);
};
