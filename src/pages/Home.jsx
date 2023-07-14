import { useState, useEffect } from 'react';
import { getAllCategories, getMealById, getFilteredCategory } from '../api';
import { Preloader } from '../layout/Preloader';
import { CategoryList } from '../components/CategoryList';


const Home = () => {
	const  [catalog, setCatalog ] = useState([]);
	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.data.categories);
			console.log(data.data.categories);
			console.log(data.data.categories);
		});
	}, []);
	return (
		<>
			{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
		</>
	);
};
export { Home };
