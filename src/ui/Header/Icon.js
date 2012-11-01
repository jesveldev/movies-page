import compIcon from '../../imgs/icon/search@2x.png';

export default function Icon({ iconClass }){
	return(
		<>
			<img className={ iconClass } src={ compIcon } alt='Search icon' title='Search icon'/>
		</>
	);
}