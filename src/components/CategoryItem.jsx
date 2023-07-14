import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
	const {
		idCategory,
		strCategory: nameCategory,
		strCategoryThumb: imageCategory,
		strCategoryDescription: descriptionCategory,
	} = props;
	return (
		<div className="card" key={idCategory}>
			<div className="card-image">
				<img src={imageCategory} alt={nameCategory} />
			</div>
			<div className="card-content">
				<span className="card-title">{nameCategory}</span>
				<p className="card-description">
					{descriptionCategory.slice(0, 40)}...
				</p>
			</div>
			<div className="card-action">
				<Link to={`/category/${nameCategory}`} className="btn">
					Watch Category
				</Link>
			</div>
		</div>
	);
};

export { CategoryItem };
