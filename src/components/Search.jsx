import { useState } from 'react';

const Search = (props) => {
	const { cb = Function.prototype } = props;
    const [value, setValue] = useState('');
    
	const handleKey = (event) => {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		cb(value);
	};

	const handleChange = (event) => {
		const targetValue = event.target.value;
		setValue(targetValue);
	};

	return (
		<div className="row">
			<div className="input-field col s12">
				<input
					type="search"
					id="search-field"
					placeholder="search"
					onKeyDown={handleKey}
                    onChange={handleChange}
					value={value}
				/>
				<button
					className="btn"
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
					}}
					onClick={handleSubmit}
				>
					Search
				</button>
			</div>
		</div>
	);
};

export { Search };
