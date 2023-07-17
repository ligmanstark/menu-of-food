import { RecipeConfig } from "./RecipeConfig";


const RecipeShow = (props) => {
	const { recipe = [] } = props;

	return (
		<div className="list-config">
			{recipe.map((el) => (
                <RecipeConfig key={el.idMeal} {...el} recipe={recipe} />
			))}
		</div>
	);
};

export { RecipeShow };
