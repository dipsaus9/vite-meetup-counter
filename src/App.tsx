import logo from './logo.svg';
import './App.css';
import { lazy } from 'react';

const Counter = lazy(() =>
	import('./Counter').then((component) => ({
		default: component.Counter,
	}))
);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>
				<div>
					<Counter />
					<Counter />
					<Counter />
				</div>
			</header>
		</div>
	);
}

export default App;
