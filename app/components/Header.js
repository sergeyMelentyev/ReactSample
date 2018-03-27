var React = require("react");

function CurrentTab(props) {
	const navigationItems = new Array("ГЛАВНАЯ", "КАТАЛОГ", "АКЦИИ");
	return (
		<ul>
			{navigationItems.map((item, index) => {
				return (
					<li onClick={props.onSelect.bind(null, item)}
						key={index}
						style={item === props.currentTab ? { fontWeight: "bold"} : null}>
						{item}
					</li>
				);
			})}
		</ul>
	);
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: "ГЛАВНАЯ"
		};
		this.updateCurrentTab = this.updateCurrentTab.bind(this);
	}
	updateCurrentTab(newTab) {
		this.setState({currentTab: newTab});
	}
	render() {
		return <CurrentTab currentTab={this.state.currentTab} onSelect={this.updateCurrentTab} />;
	}
}

module.exports = Header;
