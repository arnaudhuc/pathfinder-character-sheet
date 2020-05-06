import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryBlue = blue[500];
const accentBlue = blue.A200;
const darkBlue = blue[900];

export const overridings = {
	name: 'Light Theme',
	palette: {
		primary: {
			light: accentBlue,
			main: primaryBlue,
			dark: darkBlue,
			contrastText: '#fff',
		},
		secondary: {
			light: accentGreen,
			main: primaryGreen,
			dark: darkGreen,
			contrastText: '#fff',
		},
	},
};

export default createMuiTheme(overridings);
