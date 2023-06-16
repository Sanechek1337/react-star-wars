import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
	personId,
	personPhoto,
	personName,
}) => {
	const dispatch = useDispatch();

	const set = () => {
		dispatch(setPersonToFavorite({
			[personId]: {
				name: personName,
				img: personPhoto
			}
		}));
	}

	const remove = () => {
		dispatch(removePersonFromFavorite(personId));
	}

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
			</div>
			<button onClick={set}>Добавить в избранное</button>
			<button onClick={remove}>Удалить из избранного</button>
		</>
	);
}

PersonPhoto.propTypes = {
	personId: PropTypes.string,
	personPhoto: PropTypes.string,
	personName: PropTypes.string,
}

export default PersonPhoto;