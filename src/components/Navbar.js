import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'


class Navbar extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			activeItem: 'home'
		}
	}
	
	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name })
	}
	
	render() {
		const { activeItem } = this.state

		return (
			<Menu secondary>
				<Menu.Item>
					<img src='https://react.semantic-ui.com/logo.png' />
				</Menu.Item>
				<Menu.Item>
					<h3>SA XXX Club</h3>
				</Menu.Item>
				<Menu.Item
					name='home'
					active={activeItem === 'home'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name='liveservices'
					active={activeItem === 'liveservices'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name='latestcontent'
					active={activeItem === 'latestcontent'}
					onClick={this.handleItemClick}
				/>
				<Menu.Menu position='right'>
					<Menu.Item>
						<Input icon='search' placeholder='Search...' />
					</Menu.Item>
					<Menu.Item
						name='profile'
						active={activeItem === 'profile'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='login'
						active={activeItem === 'login'}
						onClick={this.handleItemClick}
					/>
				</Menu.Menu>
			</Menu>
		)
	}
}

export default Navbar;
