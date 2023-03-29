import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/newtork';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
	const [people, setPeople] = useState(null);

	const getResource = async (url) => {
		const res = await getApiResource(url);

		const peopleList = res.results.map(({ name, url }) => {
			const id = getPeopleId(url);
			const img = getPeopleImage(id);

			return {
				id,
				name,
				img
			}
		})

		setPeople(peopleList);
	}

	useEffect(() => {
		getResource(API_PEOPLE)
	}, [])

	return (
		<>
			<PeopleList people={people} />
		</>
	);
}

export default PeoplePage;