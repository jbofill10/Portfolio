import React from 'react';
import { SidebarData } from './SidebarData.jsx'

export default class Sidebar extends React.Component {

	constructor(props){
		super(props);
		this.state={}
	}
	render(){
        return(
            <div className='Sidebar'>
                <ul>
                    {SidebarData.map((val, key) => {
                        return(
                            <li key={key}> 
                                <div>{val.icon}</div> 
                            </li>
                        )
                    })}
                </ul>
            </div>
		)
	}

}

