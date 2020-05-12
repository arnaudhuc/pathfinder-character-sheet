import {
	configureStore,
	EnhancedStore,
	getDefaultMiddleware,
	Middleware,
} from 'redux-starter-kit';

import rootReducer from './redux/reducers';

function getMiddlewares(): Middleware[] {
	const commonMiddleware = getDefaultMiddleware();
	if (process.env.NODE_ENV !== 'production') {
		return [...commonMiddleware];
	}
	return commonMiddleware;
}

export default function configureAppStore(): EnhancedStore {
	return configureStore({
		reducer: rootReducer,
		middleware: getMiddlewares(),
	});
}
