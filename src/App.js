import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			drivers: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
			"http://localhost:8080/drivers")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					drivers: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, drivers } = this.state;
		if (!DataisLoaded) return <div>
			<h2> Please wait some time.... </h2> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				drivers.map((driver) => (
				<ol key = { driver.carUid } >
					Driver_Name: <b>{ driver.name }</b>,
					Driver_Contact: <b>{ driver.contact }</b>,
					Driver_Car: <b>{ driver.carUid }</b>
				</ol>
				))
			}
		</div>
	);
}
}

export default App;
