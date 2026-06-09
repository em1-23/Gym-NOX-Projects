import React from "react";
import Header from './header.jsx';
import LinearSection from './Linear-Section.jsx';
import InputSend from './Input-Send.jsx';
import SectionButtonTransition from './Section-Button-Transition.jsx';
import SignIn from './Pages/SignIn.jsx';
import LogIn from './Pages/LogIn.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionOne from './Section-1.jsx';
import SectionTwo from './Section-2.jsx';

function App(){
	return(
		<div className="Gym-Pages">
			<Header className="Header" />
			<SectionOne className="SectionOne" />
			<LinearSection className="Linear-Section" styleSection={{rotate:"5deg"}} />
			<LinearSection className="Linear-Section Linear-White" styleSection={{rotate:"356deg" ,backgroundColor:"white" ,color:"black"}} />
			<SectionTwo className="SectionTwo" />
			<SectionButtonTransition className="Section-Button-Transition" h1Number="01" h3Type="Arnold Split" />
			<SectionButtonTransition className="Section-Button-Transition" h1Number="02" h3Type="Push Pull Leg" />
		</div>
	);
}

export default App;