import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home/index'
import FichaRaças from './componentes/Página Raças/FichaRaças/index';
import FichaClasses from './componentes/Página Classes/FichaClasses/index';
import FichaHabilidades from './componentes/Página Habilidades/FichaHabilidades/index';

function App() {



	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path="/FichaRacas" element={<FichaRaças />} />
				<Route path='/FichaClasses' element={<FichaClasses />} />
				<Route path='/FichaHabilidades' element={<FichaHabilidades />} />
			</Routes>
		</Router >
	);
}

export default App;
