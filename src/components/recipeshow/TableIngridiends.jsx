const TableIngridiends = (props) => {
	const { recipe = [] } = props;
	return (
		<table className="centered">
			<thead>
				<tr>
					<th>Ingridients</th>
					<th>Measure</th>
				</tr>
			</thead>
			<tbody>
                {Object.keys(recipe[0]).map((key) => {
                    if (key.includes('Ingredient') && recipe[0][key]) {
                        return (
							<tr key={key}>
                                <td>{recipe[0][key]}</td>
								<td>{recipe[0][`strMeasure${key.slice(13)}`]}</td>
							</tr>
						);
					}
					return null;
				})}
			</tbody>
		</table>
	);
};

export { TableIngridiends };
