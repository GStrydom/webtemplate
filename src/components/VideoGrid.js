import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'


class VideoGrid extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<>
				<Grid relaxed columns={4}>
					<Grid.Row>
						<Grid.Column>
							<Header as="h2">Photos</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
	      					<Image src='/images/wireframe/image.png' />
	    				</Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
	      					<Image src='/images/wireframe/image.png' />
	    				</Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					    <Grid.Column>
					      	<Image src='/images/wireframe/image.png' />
					    </Grid.Column>
					</Grid.Row>
  				</Grid>
			</>
		)
	}
}

export default VideoGrid