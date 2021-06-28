import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBriefcase, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const SidebarData = [
	{
		title: 'Home',
		icon: <FontAwesomeIcon icon={faHome}/>,
		link: '/'
	},

	{
		title: 'Experience',
		icon: <FontAwesomeIcon icon={faBriefcase}/>,
		link: '/experience'
	},

	{
		title: 'Projects',
		icon: <FontAwesomeIcon icon={faGithub}/>,
		link: '/projects'
	},

	{
		title: 'Contact Me',
		icon: <FontAwesomeIcon icon={faPaperPlane}/>,
		link: '/contact'
	}
];
