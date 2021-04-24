import React from 'react';
import { SidebarData } from './SidebarData.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

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
            <div>
                <div className='bars'>
                    <FontAwesomeIcon icon={faBars} onClick={this.barsClick}/>
                </div>

                <ProSidebar collapsed={this.state.collapsed} >
                    <Menu iconShape="circle">
                        {SidebarData.map((val) => {
                            return(
                                <MenuItem icon={ val.icon }> {val.title} </MenuItem>
                            )
                        })}
                    </Menu>
                </ProSidebar>
            </div>
		)
	}

}

