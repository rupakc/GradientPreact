import { h } from 'preact';
import { Router } from 'preact-router';
import {useEffect, useState} from "preact/hooks";
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Audio from '../routes/audio';
import Sport from '../routes/sport';

const App = () => {
const [parentValue, setParentValue] = useState("Hello World");
const parentValueChangeHandler = (newValue) => {
	setParentValue(newValue);
	console.log(parentValue);
}
return (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Audio path="/audio/" />
			<Sport path="/sport/" />
		</Router>

	</div>
)
}
export default App;
