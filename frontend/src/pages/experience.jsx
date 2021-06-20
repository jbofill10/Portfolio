import { Sidebar, Project } from "../components/index";
function Experience() {
	return (
		<div className="App">
			<Sidebar/>
			<div className='Projects'>
				<Project title='Magma Chess'/>
			</div>
		</div>
	);
}

export default Experience;