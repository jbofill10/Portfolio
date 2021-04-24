import React from 'react';
import { SidebarData } from './SidebarData.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

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
                <div className='bars-tab'>
                    <FontAwesomeIcon className={this.state.collapsed ? 'arrow-right' : 'arrow-left'} icon={faAngleDoubleRight} onClick={this.barsClick}/>
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

