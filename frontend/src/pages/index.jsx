import { Sidebar, ToolIcon } from '../components/index'
import { ToolData } from '../constants/index';

function App() {
	return (
		<div className="App">
			<Sidebar/>
			<div className='AboutLayout'>
				<div className='IntroText'>
					<div className='Introduction'>
						Hi! My name is
						<div className='Name'>JUAN BOFILL</div>

						<div className='Description'>
							I am a Software Engineer that loves to work on cool projects in my free time to
							grow in different areas of Software Engineering and Machine Learning
						</div>
					</div>
				</div>

				<div className='Separator' />

				<div className='ToolIntro' style={{
					fontFamily: 'MadeTommy',
					fontSize: 25,
					marginBottom: "2%"
					}}>
					Here's what I like working with
				</div>

				<div className='Tools'>
					<div className='Languages'>
						<div style={{
							fontSize: 25,
							fontFamily: 'MadeTommy',
							marginBottom: '2%'
						}} className='LanguagesTitle'>Languages</div>

						{ToolData['Languages'].map(i => {
							return (
								<ToolIcon 
									src={i.icon} 
									height={42} 
									width={45}/>
							);
						})}
					</div>

					<div className='Frameworks'>
					<div style={{
							fontSize: 25,
							fontFamily: 'MadeTommy',
							flexBasis: '100%',
							marginBottom: '2%'
					}} className='FrameworksTitle'>Frameworks</div>

						{ToolData['Frameworks'].map(i => {
							return (
								<ToolIcon 
									src={i.icon}
									height={42} 
									width={45}/>
							)
						})}
					</div>

					<div className='DBs'>
						<div style={{
							fontSize: 25,
							fontFamily: 'MadeTommy',
							marginBottom: '2%'
						}} className='DBTitle'>
							Databases
						</div>
						{ToolData['Databases'].map(i => {
							return ( <ToolIcon 
								src={i.icon} 
								height={42} 
								width={45}/>
						)})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
