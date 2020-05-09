import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import messages_fr from './i18n/fr.json';
import messages_en from './i18n/en.json';

const messages = {
	fr: messages_fr,
	en: messages_en,
};

ReactDOM.render(
	<React.StrictMode>
		<App messages={messages} />
	</React.StrictMode>,
	document.getElementById('root'),
);
