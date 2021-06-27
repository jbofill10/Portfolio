import Sidebar from '../components/sidebar.jsx'

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
					marginBottom: "auto"
					}}>
					Here's what I like working with
				</div>

				<div className='Tools'>

				</div>
			</div>
		</div>
	);
}

export default App;
