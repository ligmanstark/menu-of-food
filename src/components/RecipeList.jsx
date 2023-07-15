import { RecipeItem } from './RecipeItem';

const RecipeList = (props) => {
	const { recipes = [] } = props;
	return (
		<>
			<div className="list">
				{recipes.map((recipe) => (
					<RecipeItem key={recipe.idMeal} {...recipe} />
				))}
			</div>
		</>
	);
};

export { RecipeList };
