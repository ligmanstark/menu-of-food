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
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className="container content">
					<Routes>
						<Route path="/" element={<Home />}>
							<Route path="/menu-of-food" element={<Home />} />
						</Route>
						<Route path="/about" element={<About />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route
							path="/category/:nameCategory"
							element={<Category />}
						/>
						<Route path="/recipes/:idMeal" element={<Recipe />} />
						<Route path="*" element={<NotFoud />} />
					</Routes>
					<Outlet />
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
