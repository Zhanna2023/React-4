import { useEffect, useState } from 'react';
import styles from './App.module.css';

const PRODUCTS_MOCK = [
	{
		id: '001',
		name: 'Телевизор',
		price: 39900,
	},
	{
		id: '002',
		name: 'Смартфон',
		price: 18900,
	},
	{
		id: '003',
		name: 'Фен',
		price: 1749,
	},
];

export const App = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		new Promise((resolve) => {
			setTimeout(() => {
				resolve({ json: () => PRODUCTS_MOCK });
			}, 2000);
		})
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			});
	}, []);

	return (
		<div className={styles.App}>
			{products.map(({ id, name, price }) => (
				<div key={id}>
					{name} - {price} руб
				</div>
			))}
		</div>
	);
};
