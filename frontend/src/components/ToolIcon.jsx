import React from 'react'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function ToolIcon(props) {
	return (
		<div className='IconLayout' style={{
			textAlign: "left",
			marginTop: "1%",
			paddingRight: '10%'
		}}>
			<img src={props.src} style={{
				height: 32,
				width: 32
			}} />
		</div>
	);
}