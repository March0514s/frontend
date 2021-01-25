import React from 'react';
import Header from './components/Header';


function App(){

	return (
		<>
			<Header title="homepage">
				<ul>
					<li>Homepage</li>
					<li>Projects</li>
				</ul>
			</Header>
			<Header title="Projects">
				<ul>
					<li>Homepage</li>
					<li>Projects</li>
					<li>Login</li>
				</ul>
		</>
	 	) 
}

export default App;

