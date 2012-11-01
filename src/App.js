import { BrowserRouter as Router } from "react-router-dom";
import styles from './App.css';

import Header from './ui/Header/Header';
import Logo from './imgs/logo/dct_2x.png';

import Home from './ui/Home/Home';
import Footer from './ui/Footer/Footer';

function App() {
    return (
        <Router>
        	<main className={ styles.App }>
        		<Header img={Logo}/>
        		<Home />
        		<Footer />
        	</main>
        </Router>
    )
}

export default App;
