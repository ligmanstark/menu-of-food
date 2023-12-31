import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { useState, useEffect } from 'react';
import { Preloader } from '../layout/Preloader';
import { RecipeList } from '../components/RecipeList';

const Category = () => {
	const { nameCategory } = useParams();
	const navigate = useNavigate();

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getFilteredCategory(nameCategory).then((data) => {
			setRecipes(data.data.meals);
		});
	}, [nameCategory]);

	return (
		<>
			<h1>{nameCategory}</h1>
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
			{!recipes.length ? <Preloader /> : <RecipeList recipes={recipes} />}
		</>
	);
};

export { Category };
