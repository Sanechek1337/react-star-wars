import { useSelector } from 'react-redux';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
	const storeData = useSelector(state => state.favoriteReducer);
	console.log(storeData)

	return (
		<>
			<h1>FavoritesPage</h1>
		</>
	);
}

export default FavoritesPage;