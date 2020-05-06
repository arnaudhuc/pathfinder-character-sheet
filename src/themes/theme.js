import { createMuiTheme } from '@material-ui/core/styles';

export const overridings = {
	name: 'Light Theme',
	palette: {
		primary: {
			light: '#78F0D6',
			main: '#40E1D1',
			dark: '#00C5CD',
			contrastText: '#000',
		},
		secondary: {
			light: '#B3FCEC',
			main: '#3CB371',
			dark: '#218B54',
			contrastText: '#000',
		},
	},
};

export default createMuiTheme(overridings);
