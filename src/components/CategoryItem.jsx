const CategoryItem = (props) => {
	const {
		idCategory,
		strCategory: nameCategory,
		strCategoryThumb: imageCategory,
		strCategoryDescription: description,
	} = props;
	return (
		<div className="card" key={idCategory}>
			<div className="card-image">
				<img src={imageCategory} alt={nameCategory} />
			</div>
			<div className="card-content">
				<span className="card-title">{nameCategory}</span>
				<p className="card-description">{description.slice(0,40)}...</p>
            </div>
            <div className="card-action">
                <a className="btn" href="#">Watch Category</a>
            </div>
		</div>
	);
};

export { CategoryItem };
