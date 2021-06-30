import { Sidebar, Job } from "../components/index";
function Experience() {
	return (
		<div className="App">
			<Sidebar/>
			<div className='Jobs'>
				<Job/>
				<Job/>
				<Job/>
				<Job/>
			</div>
		</div>
	);
}

export default Experience;