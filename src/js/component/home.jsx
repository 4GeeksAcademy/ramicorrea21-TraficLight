
import React  from "react";
import "../../styles/index.css";
import { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("")

	return (
	<>
	<div className="trafficTop">
		
	</div>
	<div className="container traffic rounded">
		<div className={selected === "red"? "selected light red" :  "light red"} onClick={() => setSelected("red") }>

		</div>
		<div className={selected === "yellow"? "selected light yellow" :  "light yellow" } onClick={() => setSelected("yellow") }>
			
		</div>
		<div className={selected === "green"? "selected light green" :  "light green"} onClick={() => setSelected("green") } >
			
		</div>
	</div>
	</>
	);
};

export default Home;
