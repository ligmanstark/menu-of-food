import { BrowserRouter as Router,Routes, Route,Outlet } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { NotFoud } from './pages/NotFound';


function App() {
	return (
		<>
			<Header />
			<main className="container content">
        <Router>
          <Routes>
          <Route  path="/" Component={Home} />
					<Route path="/about" Component={About} />
            <Route path="/contacts" Component={Contacts} />
            <Route path='*' Component={NotFoud} />
          </Routes>
					
        </Router>
        <Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
