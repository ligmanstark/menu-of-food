import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { useState, useEffect } from 'react';
import { Preloader } from '../layout/Preloader';
import { RecipeShow } from '../components/recipeshow/RecipeShow';

const Recipe = () => {
	const { idMeal } = useParams();
	const navigate = useNavigate();
	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		getMealById(idMeal).then((data) => {
			setRecipe(data.data.meals);
			console.log(data.data.meals);
		});
	}, [idMeal]);

	return (
		<>
			{!recipe.length ? <Preloader /> : <RecipeShow recipe={recipe} />}
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
		</>
	);
};

export { Recipe };
