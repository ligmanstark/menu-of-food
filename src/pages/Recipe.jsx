import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { useState, useEffect } from 'react';

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
			<h1>Hello from meal</h1>
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
		</>
	);
};

export { Recipe };
