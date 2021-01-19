import React, { Component } from 'react'
import { Grid, Image, List, Label, Button } from 'semantic-ui-react'


class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return(
			<>
			<Grid columns={3}>
				<Grid.Row>
					<Grid.Column width={4}>
						<Image src='../images/GregoryStrydom.png' size='medium' />
					</Grid.Column>
					<Grid.Column width={9}>
						<Button positive>Edit Profile</Button>
						<List divided selection>
    						<List.Item>
						    	<Label color='red' horizontal>
						    		Name
						      	</Label>
						     	John Smith
    						</List.Item>
						    <List.Item>
						      <Label color='purple' horizontal>
						        Rank
						      </Label>
						      Pro Member
						    </List.Item>
						    <List.Item>
						      <Label color='red' horizontal>
						        Location
						      </Label>
						      Miami, USA
						    </List.Item>
						    <List.Item>
						      <Label color='blue' horizontal>
						        Join Date
						      </Label>
						      15 January 2021
						    </List.Item>
  						</List>
					</Grid.Column>
					<Grid.Column width={3}>
						Subscriptions
					</Grid.Column>
				</Grid.Row>
			</Grid>
			</>
		)
	}
}

export default Profile;
