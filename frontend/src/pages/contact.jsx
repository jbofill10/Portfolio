import React from 'react';
import Sidebar from '../components/sidebar';

export default class Contact extends React.Component {
	constructor() {
		super();
		this.state = [];
	}

	render() {
		return (
			<div className='App'>
				<Sidebar/>
			</div>
		)
	}
}