import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import Header from './ui/Header/Header';

import Home from './ui/Home/Home';
import Footer from './ui/Footer/Footer';

function App() {
    return (
        <Router>
        	<main className='App'>
        		<Header />
        		<Home />
        		<Footer />
        	</main>
        </Router>
    )
}

export default App;
