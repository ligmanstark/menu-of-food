import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,

} from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFoud } from './pages/NotFound';
import { Movie } from './pages/Movie';
import { Wava } from './pages/Wava';

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className="container content">
				

					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/movies/:title" element={<Movie />} />
						<Route path="*" element={<NotFoud />} />
						<Route path="/Wava" element={<Wava />} />
					</Routes>
					<Outlet />
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
