import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'


class ImageGrid extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<>
				<Grid relaxed centered columns={4}>
					<Grid.Row>
						<Grid.Column>
							<Header as="h2">Videos</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
	      					<Image src='https://via.placeholder.com/150' />
	    				</Grid.Column>
					    <Grid.Column>
					      	<Image src='https://via.placeholder.com/150' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='https://via.placeholder.com/150' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='https://via.placeholder.com/150' />
					    </Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
	      					<Image src='https://via.placeholder.com/150' />
	    				</Grid.Column>
					    <Grid.Column>
					      	<Image src='https://via.placeholder.com/150' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='https://via.placeholder.com/150' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='https://via.placeholder.com/150' />
					    </Grid.Column>
					</Grid.Row>
  				</Grid>
			</>
		)
	}
}

export default ImageGrid
