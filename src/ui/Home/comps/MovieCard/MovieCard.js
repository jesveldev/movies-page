import './MovieCard.css';

export default function MovieCard({ img, movieTitle, pubYear, description, alt }){
	return(
		<article className='movie-card'>
			<img src={ img } alt={ alt } />
			<footer className='movie-card-info'>
				<h4 className='movie-card-title'>{ movieTitle }</h4>
				<p className='movie-card-year'>{ pubYear }</p>
				<p className='movie-card-description'>{ description }</p>
			</footer>
		</article>
	);
}