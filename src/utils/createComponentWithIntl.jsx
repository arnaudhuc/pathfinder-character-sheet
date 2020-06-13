import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import messages_en from '../i18n/en.json';

const createComponentWithIntl = (
	children,
	props = { locale: 'en', messages: messages_en },
) => {
	return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);
};
export default createComponentWithIntl;
