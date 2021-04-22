import React from 'react';
import { SidebarData } from './SidebarData.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class Sidebar extends React.Component {

	constructor(props){
		super(props);
        this.state={
            'showSidebar': false
        }
	}

    barsClick = () => {
        this.state.showSidebar = this.setState({'showSidebar': !this.state.showSidebar})
    }

	render(){
        return(
            <div>
                <div className='NavBar'>
                    <FontAwesomeIcon onClick={this.barsClick} icon={faBars} />
                </div>

                <div className='Sidebar'>
                    <div className={this.state.showSidebar ? 'SidebarOpen' : 'SidebarClosed'}>
                        <ul className='SideBarList'>
                            {SidebarData.map((val, key) => {
                                return(
                                    <li className='SidebarRow' key={key}> 
                                        <div>{val.icon}</div> 
                                        <div className='SidebarText'>{val.title}</div>
                                    </li>
                                )})}
                        </ul>
                    </div>
                </div>
            </div>
		)
	}

}

