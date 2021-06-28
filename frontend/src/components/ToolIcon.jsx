import Image from 'next/image'

export default function ToolIcon(props) {
	return (
		<div className='IconLayout' style={{
			textAlign: "left",
			marginTop: "1%",
			paddingRight: '10%'
		}}>
			<Image src={props.src} height='32' width='32'/>
		</div>
	);
}