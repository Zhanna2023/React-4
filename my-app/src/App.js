import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [products, setProducts] = useState([]);
	const [refreshProducts, setRefreshProducts] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	useEffect(() => {
		/* ... */
	}, [refreshProducts]);

	const requestAddVacuumCleaner = () => {
		/* ... */
	};

	const requestUpdateSmartphone = () => {
		setIsUpdating(true);

		fetch('http://localhost:3005/products/002', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: 'Смартфон',
				price: 17900,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Смартфон обновлён, ответ сервера:', response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsUpdating(false));
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
			<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
				Обновить смартфон
			</button>
		</div>
	);
};
