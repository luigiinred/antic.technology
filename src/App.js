import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import OpenSource from './pages/OpenSource';

const routes = [
	{ path: '/', component: Home, label: 'Home' },
	{ path: '/our-work', component: Home, label: 'Our Work' },
  { path: '/open-source', component: OpenSource, label: 'Open Source' },
  { path: '/open-source/romarin', component: OpenSource, label: '' },
	{ path: '/contact', component: Home, label: 'Contact' },
];

class App extends Component {
	render() {
		return (
			<Router>
				<div>
          <h1>Antic </h1>
					<ul>
						{routes.map((route) => (
							<li>
								<Link to={route.path}>{route.label}</Link>
							</li>
						))}
					</ul>

					<hr />

					{routes.map((route) => <Route exact path={route.path} component={route.component} />)}
				</div>
			</Router>
		);
	}
}

export default App;
