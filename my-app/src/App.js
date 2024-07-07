import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://mocki.io/v1/28454519-5809-41e6-8751-03d2a479fdd8')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			});
	}, []);

	return (
		<div className={styles.App}>
			{products.map(({ id, name, price }) => (
				<div кеу={id}>
					{name} - {price} руб{' '}
				</div>
			))}
		</div>
	);
};
