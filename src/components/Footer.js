import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import "../css/Footer.css"


class Footer extends Component {
  render() {
    return(
      <>
        <Grid columns={3}>
          <Grid.Column>
            <h4>LINKS</h4>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">About</a></li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h4>ABOUT US</h4>
            <ul>
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h4>Affiliates</h4>
            <ul>
              <li><a href="">Sponsor</a></li>
              <li><a href="">Sponsor</a></li>
              <li><a href="">Sponsor</a></li>
              <li><a href="">Sponsor</a></li>
            </ul>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}

export default Footer;