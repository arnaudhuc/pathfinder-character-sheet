/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sheet } from '../../pages/Sheet/Sheet';
import { Home } from '../../pages/Home/Home';
import { Container, ThemeProvider } from '@material-ui/core';
import Theme from '../../themes/theme';
import { memo } from 'react';
import { IntlProvider } from 'react-intl';

interface IApp {
	messages: any;
}

const App: React.FC<IApp> = (props) => {
	const { messages } = props;

	const lang = navigator.language.split(/[-_]/)[0] === 'fr' ? 'fr' : 'en';

	return (
		<IntlProvider locale={lang} messages={messages[lang]}>
			<Router>
				<ThemeProvider theme={Theme}>
					<Container maxWidth="lg">
						<Switch>
							<Route path="/sheet">
								<Sheet />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</Container>
				</ThemeProvider>
			</Router>
		</IntlProvider>
	);
};
export default memo(App);
