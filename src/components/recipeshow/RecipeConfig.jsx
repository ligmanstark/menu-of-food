import { TableIngridiends } from './TableIngridiends';

const RecipeConfig = (props) => {
	const {
		idMeal,
		strMeal,
		// strCategory,
		// strArea,
		strInstructions,
		strMealThumb,
		// strTags,
		strYoutube,
		recipe = [],
	} = props;

	return (
		<>
			<div className="card card-config" key={idMeal}>
				<div className="card-image card-image-config">
					<img src={strMealThumb} alt={strMeal} />
				</div>
				<div className="card-content">
					<span className="card-title">{strMeal}</span>
					<p className="card-description">{strInstructions}</p>
				</div>
			</div>

			<TableIngridiends recipe={recipe} />

			{strYoutube ? (
				<div className="video-frame">
					<h6>Watch!</h6>
					<iframe
						title="idMeal"
						src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
						allowFullScreen
					/>
				</div>
			) : (
				''
			)}
		</>
	);
};

export { RecipeConfig };
