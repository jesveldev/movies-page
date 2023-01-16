
export default function Icon({ src, iconClass }){
	return(
		<>
			<img className={ iconClass } src={ src } alt='Search icon' title='Search icon'/>
		</>
	);
}