import { Sidebar, ToolIcon, ToolGrid } from '../components/index'
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
					<ToolGrid name='Languages' icons={ToolData}/>
					<ToolGrid name='Frameworks' width={17} flexDir={'row'} icons={ToolData}/>
					<ToolGrid name='Databases' icons={ToolData}/>
				</div>
			</div>
		</div>
	);
}

export default App;
