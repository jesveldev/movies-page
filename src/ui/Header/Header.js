import './Header.css';
import Icon from './Icon';

export default function Header({ img }) {
    return (
        <header className='header'>
        	<figure className='logo-container'>
        		<img src= { img } title='Website logo' alt='Website logo'/>
        	</figure>

        	<form id='search-form'>
        		<div>
	        		<Icon />
	        		<input
	        			type='search'
	        			name='search-field'
	        			className='search-field'
	        			placeholder='Title'
	        		/>
        		</div>
        	</form>
        </header>
    );
}
