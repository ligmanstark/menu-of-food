import { useParams, useNavigate } from 'react-router-dom';

const Movie = () => {
	const { title } = useParams();
	const navigate = useNavigate();
	return (
		<>
			<h1>Some {title}</h1>
			<button className="btn" onClick={() => navigate(-1)}>
				Go Back
			</button>
		</>
	);
};

export { Movie };
