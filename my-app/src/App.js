import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [products, setProducts] = useState([]);
	const [refreshProducts, setRefreshProducts] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3005/products')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProducts]);

	const requestAddVacuumCleaner = () => {
		setIsCreating(true);

		fetch('http://localhost:3005/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: 'Пылесос',
				price: 4690,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Пылесос добавлен, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsCreating(false));
	};

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className="loader"></div>
			) : (
				products.map(({ id, name, price }) => (
					<div key={id}>
						{name} - {price} руб
					</div>
				))
			)}
			<button disabled={isCreating} onClick={requestAddVacuumCleaner}>
				Добавить пылесос
			</button>
		</div>
	);
};
