import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritesPage from '@containers/FavoritesPage';
import SearchPage from '@containers/SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';

const routesConfig = [
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '/people',
		element: <PeoplePage />
	},
	{
		path: '/favorites',
		element: <FavoritesPage />
	}, {
		path: '/search',
		element: <SearchPage />
	},
	{
		path: '/people/:id',
		element: <PersonPage />
	},
	{
		path: '/fail',
		element: <ErrorMessage />
	},
	{
		path: '/not-found',
		element: <NotFoundPage />
	},
	{
		path: '*',
		element: <NotFoundPage />
	},
];

export default routesConfig;