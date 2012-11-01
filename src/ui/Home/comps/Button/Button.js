
export default function Button({ img, alt, buttonClass, buttonFunc}){
	return(
		<button className={ buttonClass } onClick={buttonFunc}>
			<img src={ img } alt={ alt }/>
		</button>
	);
}