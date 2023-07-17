import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Preloader } from '../layout/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const search = searchParams.get('search') || '';

	const handleSearch = (str) => {
		setFilteredCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		);
		setSearchParams({ search: str });
	};
	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.data.categories);
			setFilteredCatalog(
				data.data.categories.filter((item) =>
					item.strCategory.toLowerCase().includes(search)
				)
			);
		});
	}, [search]);
	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CategoryList catalog={filteredCatalog} />
			)}
		</>
	);
};
export { Home };
