import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log('Первый -', counter);

		return () => console.log('Второй -', counter);
	}, [counter]);

	return (
		<div className={styles.App}>
			<button onClick={() => setCounter(counter + 1)}>+ 1</button>
		</div>
	);
};
