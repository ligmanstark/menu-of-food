import { Link } from "react-router-dom";

const RecipeItem = (props) => {
	const { strMeal, strMealThumb, idMeal } = props;
	return (
		<div className="card" key={idMeal}>
			<div className="card-image">
				<img src={strMealThumb} alt={strMeal} />
			</div>
			<div className="card-content">
				<span className="card-title">{strMeal}</span>
			</div>
			<div className="card-action">
				<Link to={`/recipes/${idMeal}`} className="btn">
					Watch recipe
				</Link>
			</div>
		</div>
	);
};

export { RecipeItem };
