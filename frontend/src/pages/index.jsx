import { Sidebar, ToolIcon } from '../components/index'
import { ToolData } from '../constants/index';

function App() {
	return (
		<div className="App">
			<Sidebar/>
			<div className='AboutLayout'>
				<div className='IntroText'>
					<div className='Introduction'>
						Hi, my name is
						<div className='Name'>Juan Bofill</div>

						<div className='Description'>
							I am a Software Engineer that loves to work on cool projects in my free time to
							grow in different areas of Software Engineering and Machine Learning
						</div>
					</div>
				</div>

				<div className='Separator' />

				<div className='ToolIntro' style={{
					fontSize: 20,
					marginBottom: "1%"
					}}>
					Here's what I like working with
				</div>

				<div className='Tools'>
					<div className='Languages'>
						<div style={{
							marginBottom: '2%'
						}} className='LanguagesTitle'>Languages</div>

						{ToolData['Languages'].map(i => {
							return (
								<ToolIcon src={i.icon}/>
							);
						})}
					</div>

					<div className='Frameworks'>
					<div style={{
							flexBasis: '100%',
							marginBottom: '2%'
					}} className='FrameworksTitle'>Frameworks</div>

						{ToolData['Frameworks'].map(i => {
							return (
								<ToolIcon src={i.icon}/>
							)
						})}
					</div>

					<div className='DBs'>
						<div style={{
							marginBottom: '2%'
						}} className='DBTitle'>
							Databases
						</div>
						{ToolData['Databases'].map(i => {
							return <ToolIcon src={i.icon}/>
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
