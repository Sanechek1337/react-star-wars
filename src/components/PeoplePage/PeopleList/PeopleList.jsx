import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
	return (
		<ul className={styles.list_container}>
			{people?.map(({ id, name, img }) =>
				<li className={styles.list_item} key={id}>
					<a href="#">
						<img className={styles.person__photo} src={img} alt={name} />
						<p>{name}</p>
					</a>

				</li>
			)}
		</ul>
	);
}

export default PeopleList;