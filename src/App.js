import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NONAME } from 'dns';

function App() {
	return (
		<div className="App">
			<h1 style={{textAlign: "center"}}>
				Lotus Chat
			</h1>
			<div className="textBox">
				<input
					className="Text"
					type="text"
					placeholder=" plz type here UwU"
					style={{paddingTop: "0.5%", paddingBottom: "0.5%", border: "none"}}
				/>
				<button className="enterButton" style={{backgroundColor: "#af19bf", border: "none", color: "white", paddingTop: "0.5%", paddingBottom: "0.5%"}}> Enter UwU </button>
			</div>
		</div>
	);
}

export default App;
