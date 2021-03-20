import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { AddTutorial } from './components/AddTutorial';
import { Test } from './components/Test';
import { Tutorial } from './components/Tutorial';
import { TutorialsList } from './components/TutorialsList';

export const App = () => {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link to={'/tutorials'} className="navbar-brand">
					Crud React-Redux
				</Link>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={'/tutorials'} className="nav-link">
							Tutorials
						</Link>
					</li>
					<li className="nav-item">
						<Link to={'/add'} className="nav-link">
							Add
						</Link>
					</li>
					<li className="nav-item">
						<Link to={'/prueba'} className="nav-link">
							Test
						</Link>
					</li>
				</div>
			</nav>

			<div className="container">
				<Switch>
					<Route exact path={[ "/", "/tutorials" ]} component={TutorialsList} />
					<Route exact path={"/add"} component={AddTutorial} />
					<Route path="/tutorials/:id"  component={Tutorial}/>
					<Route path={"/prueba"} component={Test}/>
				</Switch>
			</div>
		</div>
	);
};
