import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';

import Theme from '../src/themes/theme';

const StylesDecorator = (storyFn) => (
	<StylesProvider injectFirst>
		<CssBaseline />
		<StyledThemeProvider theme={Theme}>
			<MuiThemeProvider theme={Theme}>{storyFn()}</MuiThemeProvider>
		</StyledThemeProvider>
	</StylesProvider>
);

export default StylesDecorator;
