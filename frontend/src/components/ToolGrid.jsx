import React from 'react';

import { ToolIcon } from '../components/index.js'

export default function ToolGrid(props) {
	return (
		<div
			className='GridContainer'
			style={{
				width: props.width  ? `${props.width}%` : '15%',
			}}>
			<div className='GridName'>{props.name}</div>
			<div
				className='GridIcons'
				style={{
					flexDirection: props.flexDir ? props.flexDir : 'column'
				}}
			>
				{props.icons[props.name].map(i => {
					return (
						<ToolIcon
							src={i.icon}
							height={42}
							width={45}/>
					);
				})}
			</div>
		</div>
	)
}
