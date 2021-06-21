import React from 'react';
import Sidebar from '../components/sidebar';
import Project from '../components/Project';

export default class ProjectPage extends React.Component {
	constructor() {
		super();
		this.state = [];
	}

	render() {
		return (
			<div className='App'>
				<Sidebar/>
				<div className='row'>
					<div className='left'>
						<div className='Projects'>
							<Project title='Magma Chess'/>
						</div>
					</div>
					<div className='right'>
						<div className='Projects'>
							<Project title='Magma Chess'/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}