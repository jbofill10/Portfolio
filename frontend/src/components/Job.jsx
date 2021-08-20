import React from 'react';
import { ToolData } from '../constants/ToolsData.jsx'
import { ToolIcon } from "../components"

export default function Job(props) {
	return (
		<div className='JobContainer'>
			<div className='JobMeta'>
				<div className='JobLeftMeta'>
					<div
						style={{'fontSize':'30px'}}
						className='CompanyName'>
						{props.company}
					</div>
					<div
						style={{'fontSize':'18px'}}
						className='JobTitle'>
						{props.title}
					</div>

					<div style={{
								'fontSize':'18px',
								'fontStyle':'italic'
								}}
						className='JobTimeFrame'
					>
						{props.timeframe}
					</div>
				</div>

				<div className='JobRightMeta'>
					<div className='JobLanguages'>
						{getTools(props.languages, 'Languages').map(i => {
							return (
								<ToolIcon
									src={i.icon}
									height={35}
									width={32}
								/>
							)
						})}
					</div>

					<div className='JobFrameworks'>
						{getTools(props.frameworks, 'Frameworks').map(i => {
							return (
								<ToolIcon
									src={i.icon}
									height={35}
									width={32}
								/>
							)
						})}
					</div>
					<div className='JobDatabases'>
						{getTools(props.databases, 'Databases').map(i => {
							return (
								<ToolIcon
									src={i.icon}
									height={35}
									width={32}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

function getTools(tools, type){
	return ToolData[type].filter(tool =>
		tools.includes(tool.name))
}
