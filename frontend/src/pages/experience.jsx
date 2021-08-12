import { Sidebar, Job } from "../components/index";
import { experienceData } from "../constants/ExperienceData.jsx"
import { ToolData } from "../constants/ToolsData.jsx"

function Experience() {
	return (
		<div className="App">
			<Sidebar/>
			<div className='Jobs'>
				{experienceData.map(job => {
					return(
						<Job 
							company={job.company} 
							title={job.title} 
							timeframe={job.timeframe} 
							desc={job.desc}
							languages={job.languages}
							frameworks={job.frameworks}
							databases={job.databases}
						/>
					)
				})}
			</div>
		</div>
	);
}

export default Experience;
