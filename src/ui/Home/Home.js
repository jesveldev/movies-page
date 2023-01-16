import './Home.css';
import MovieCard from './comps/MovieCard/MovieCard';
import Button from './comps/Button/Button';
import proofImg from './comps/0.jpg';
import Icon from './comps/Icon/Icon';
import compIcon from '../../imgs/icon/search@2x.png';
import previousPage from '../../imgs/icon/left-chevron@2x.png';
import nextPage from '../../imgs/icon/right-chevron@2x.png';
import React, {useState, useEffect} from 'react';

export default function Home() {

	const [ movies, setMovies ] = useState([]); // For save the movies
	const [ page, setPage ] = useState(1); // For change the pages 
	const [ filterState, setFilterState] = useState(''); // For filter words

	useEffect(()=>{
		fetch("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json")
		.then(e=>e.json())
		.then(e=>setMovies([...e.entries]))
		.catch(e=>console.error(e));
	},[]);

	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	//							FUNCTIONS 
	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	// ---------------------------------------------------------------

	function definePagesNumber(){

		// This one was made for create dynamically a number of pages buttons
		// equal to the number of movies that were received prevoiusly 
		// in the 'useEffect'

		let number = movies.length/10,
			pages = [];

		if(number===Math.floor(number)){

			for(let i = 1; i<=number;i++){
				pages.push(i);
			}

			return pages;

		}else{
			number = number-(number-Math.floor(number))+1;

			for(let i = 1; i<=number;i++){
				pages.push(i);
			}
			
			return pages;
		}
	}


	function pageChanges(page){

		// This is the function that are using the pages buttons for 
		// change between pages

		setPage(page);
	}

	function arrowsPageChanges(button){

		// This one was made for the arrow buttons that also can make a
		// change between pages.

		if(button){
			if(page<definePagesNumber().length){
				setPage(page+1);
			}
		}else{
			if(page>1){
				setPage(page-1);
			}
		}
	}

	function typingSearch(e){

		// Save the wrote characters on the search's form and
		// make possible the filter.

		setFilterState(e.target.value);
	}

	function filterNames(){

		// This one is the heart of the filter. Take the words on the input
		// and set in the page all movies that include the words our user
		// is using for the search.

		return movies.filter(e=>e.title.includes(filterState)).map(e=>{
			return (<MovieCard
				key={Math.random()*192-4.002/43}
				img={e.images.posterArt.url}
				alt={e.title} movieTitle={e.title}
				pubYear={e.releaseYear}
				description={e.description}
			/>)
		})
	}

	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	// ---------------------------------------------------------------
	// ---------------------------------------------------------------

    return (
        <section className='home'>
        	<form id='search-form'>
        		<div>
	        		<Icon src={ compIcon }/>
	        		<input
	        			type='search'
	        			name='search-field'
	        			className='search-field'
	        			placeholder='Title'
	        			autoComplete='off'
	        			onChange={(e)=>typingSearch(e)}
	        		/>
        		</div>
        	</form>
        	<div className='main-content'>
        		<h2>Popular Movies</h2>

        		<div className='movies-container'>
        			{
        				filterState?[...filterNames()]
        				:(movies.map(e=><MovieCard key={Math.random()*192-4.002/43} img={e.images.posterArt.url} alt={e.title} movieTitle={e.title} pubYear={e.releaseYear} description={e.description}/>)
        					.filter((e,i)=>i<page*10&&i>=page*10-10)) 
        			}
        		</div>

	        	<div className='pages-buttons'>

	        		{filterState?null:<Button
	        			img={previousPage}
	        			alt='Previous page button'
	        			buttonClass='back-button'
	        			buttonFunc={()=>arrowsPageChanges(false)}
	        		/>}

	        		{filterState?null:
	        			definePagesNumber()
	        				.map(e=>{
	        						return (
	        							<button
	        								className='page-button'
	        								onClick={()=>pageChanges(e)}
	        							>{e}</button>);
	        				}
	        			)
	        		}

	        		{filterState?null:<Button
	        			img={nextPage}
	        			alt='Next page button'
	        			buttonClass='next-button'
	        			buttonFunc={()=>arrowsPageChanges(true)}
	        		/>}
	        	</div>
        	</div>
        </section>
    );
}
