import React from 'react';

export default function Job(props) {
	return (
		<div className='JobContainer'>
			<div className='JobIcon' style={{
				height: '85%',
				width: '10%',
				backgroundColor: '#465172',
				alignItems: 'left',
				margin: 'auto 89% auto auto',
				borderRadius: '50%',
				textAlign: 'center',
				boxShadow: '0 0 0 4px #55638B'
			}}>
				<img src='/leidos.svg' style={{
					height:'50%',
					width: '80%',
					margin: '12% auto auto auto',

				}}/>
			</div>
		</div>
	);
}