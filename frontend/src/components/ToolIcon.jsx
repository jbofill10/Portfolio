import React from 'react'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function ToolIcon(props) {
	return (
		<div className='IconLayout' style={{
			textAlign: "left",
			marginTop: "1%",
		}}>
			<img src={props.src} style={{
				height: props.height,
				width: props.height,
				maxWidth: '100%',
			}} />
		</div>
	);
}
