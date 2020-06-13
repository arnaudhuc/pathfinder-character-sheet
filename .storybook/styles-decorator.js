import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { IntlProvider } from 'react-intl';

import messages_fr from '../src/i18n/fr.json';
import messages_en from '../src/i18n/en.json';

import Theme from '../src/themes/theme';

const lang = navigator.language.split(/[-_]/)[0] === 'fr' ? 'fr' : 'en';

const messages = {
	fr: messages_fr,
	en: messages_en,
};

const StylesDecorator = (storyFn) => (
	<IntlProvider locale={lang} messages={messages[lang]}>
		<StylesProvider injectFirst>
			<CssBaseline />
			<MuiThemeProvider theme={Theme}>{storyFn()}</MuiThemeProvider>
		</StylesProvider>
	</IntlProvider>
);

export default StylesDecorator;
