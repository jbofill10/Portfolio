import React from 'react';
import { SidebarData } from './SidebarData.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

import Link from 'next/link'

export default class Sidebar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			'collapsed': true
		}
	}

	barsClick = () => {
		this.setState({
			'collapsed': !this.state.collapsed
		})
	}

	render(){
		return(
			<div className='Sidebar'>
				<div className='arrows-tab'>
					<button className='arrow-button' onClick={this.barsClick}>
						<FontAwesomeIcon
							className={this.state.collapsed ? 'arrow-right' : 'arrow-left'}
							icon={faAngleDoubleRight}

						/>
					</button>
				</div>

				<ProSidebar collapsed={this.state.collapsed} >
					<Menu iconShape="circle">
						{SidebarData.map((val) => {
							return(
								<Link href={val.link}>
									<MenuItem icon={ val.icon }> {val.title} </MenuItem>
								</Link>
							)
						})}
					</Menu>
				</ProSidebar>
			</div>
		)
	}

}

