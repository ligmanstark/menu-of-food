import { CategoryItem } from './CategoryItem';

const CategoryList = (props) => {
	const { catalog = [] } = props;
	return (
		<div className="list">
			{catalog.map((el) => (
				<CategoryItem key={el.idCategory} {...el} />
			))}
		</div>
	);
};

export { CategoryList };
