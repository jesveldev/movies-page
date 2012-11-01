import './Home.css';

import MovieCard from './comps/MovieCard/MovieCard';
import Button from './comps/Button/Button';

import proofImg from './comps/0.jpg';

import previousPage from '../../imgs/icon/left-chevron@2x.png';
import nextPage from '../../imgs/icon/right-chevron@2x.png';

import React, {useState, useEffect} from 'react';

export default function Home() {

	const [ movies, setMovies ] = useState([]);
	const [ page, setPage ] = useState(1);

	useEffect(()=>{
		fetch("https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json")
		.then(e=>e.json())
		.then(e=>setMovies([...e.entries]))
		.catch(e=>console.error(e));

	},[]);

	function pageButtons(){
		let number = Math.round(movies.length/10),
			pages = [];

		for(let i = 1; i<=number;i++){
			pages.push(i);
		}

		return pages;
	}

	function pageChanges(page){
		setPage(page);
	}

	function arrowsPageChanges(button){
		if(button){
			if(page<pageButtons().length){
				setPage(page+1);
			}
		}else{
			if(page>1){
				setPage(page-1);
			}
		}
	}

    return (
        <section className='home'>
        	<div className='main-content'>
        		<h2>Popular Movies</h2>

        		<div className='movies-container'>
        			{movies.map(e=><MovieCard img={e.images.posterArt.url} alt={e.title} movieTitle={e.title} pubYear={e.releaseYear} description={e.description}/>).filter((e,i)=>i<page*10&&i>=page*10-10)}
        		</div>

	        	<div className='pages-buttons'>

	        		<Button
	        			img={previousPage}
	        			alt='Previous page button'
	        			buttonClass='back-button'
	        			buttonFunc={()=>arrowsPageChanges(false)}
	        		/>

	        		{pageButtons().map(e=><button className='page-button' onClick={()=>pageChanges(e)}>{e}</button>)}

	        		<Button
	        			img={nextPage}
	        			alt='Next page button'
	        			buttonClass='next-button'
	        			buttonFunc={()=>arrowsPageChanges(true)}
	        		/>
	        	</div>
        	</div>
        </section>
    );
}
