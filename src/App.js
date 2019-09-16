import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NONAME } from 'dns';

function App() {
	return (
		<div className="App">
			<h1 style={{textAlign: "center", backgroundColor: "#a74cb0", marginTop: "0", padding: "0.5%", color: "white"}}>
				Lotus
			</h1>
			<div className="textBox">
				<input
					className="inputBox"
					type="text"
					placeholder="plz type here UwU"
				/>
				<button className="enterButton">UwU</button>
			</div>
		</div>
	);
}

export default App;
