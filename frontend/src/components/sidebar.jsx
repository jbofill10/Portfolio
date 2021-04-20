import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default class Sidebar extends React.Component {

	constructor(props){
		super(props);
		this.state={}
	}
	render(){
        return(
          <ProSidebar>
            <Menu iconShape="square">
              <MenuItem>Dashboard</MenuItem>
                <SubMenu title="Components">
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
          </ProSidebar>
		)
	}

}

