/** @jsx jsx */
import { jsx } from '@emotion/core';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/app/App';
import messages_fr from './i18n/fr.json';
import messages_en from './i18n/en.json';
import configureStore from './configureStore';

const store = configureStore();

const messages = {
	fr: messages_fr,
	en: messages_en,
};

ReactDOM.render(
	<Provider store={store}>
		<App messages={messages} />
	</Provider>,
	document.getElementById('root'),
);
