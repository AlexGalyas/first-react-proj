import './app-info.css';

const AppInfo = ({increased,employees}) => {
	return(
		<div className="app-info">
			<h1>Employee accounting at the Alex company</h1>
			<h2>Total number of employees: {employees} </h2>
			<h2>Received the award: {increased}</h2>
		</div>
	);
}

export default AppInfo;