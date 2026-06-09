import React from "react";
import LinearSection from './Linear-Section.jsx';
import InputSend from './Input-Send.jsx';
import SectionButtonTransition from './Section-Button-Transition.jsx';
function App(){
	return(
		<div className="Gym-Pages">
			<button className="Button">Button Test</button>
			<button className="Button Spectial">Button Test</button>
			<ul className="ul-List">
				<li>NOX</li>
				<li>NOX</li>
				<li>NOX</li>
				<li>NOX</li>
				<li>NOX</li>
			</ul>
			<LinearSection className="Linear-Section" styleSection={{rotate:"357deg"}} />
			<LinearSection className="Linear-Section" styleSection={{rotate:"6deg" ,backgroundColor:"white" ,color:"black"}} />
			<InputSend placeholder="Send A Good News" />
			<SectionButtonTransition className="Section-Button-Transition" 
				h1Number="01"
				h3Type="Your Plan"
				li="jounir"
			/>
		</div>
	);
}

export default App;