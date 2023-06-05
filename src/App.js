import React, {Component} from "react";
import 'semantic-ui-css/semantic.min.css';
import { Grid, Flag, Icon, Input, Header, Image, Divider, Container, Label, Button } from "semantic-ui-react";

class App extends Component{
  render(){
    return(
      <div>
        <Grid container columns={8}>
          <Grid.Row>
           <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Column width={1}>
            <Flag name="indonesia"/>
          </Grid.Column>
          <Grid.Column width={1}>
          <Icon name="angle left" size="big"/>
         
          </Grid.Column>
          <Grid.Column width={1}>
          <Icon name="angle right" size="big"/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Input fluid type="text" placeholder="Search..." icon={<Icon name="star"/>} />
          </Grid.Column>
          <Grid.Column>
            <Header as="h3">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png"/>
              Patrick
            </Header>
          </Grid.Column>
        </Grid>
        <Divider horizontal>Selamat Datang!!!</Divider>
        <Container textAlign="right">
          <Label as="a" color="teal" tag >
            SPORT
          </Label>
        </Container>
        <br></br>
        <Container textAlign="center">
          <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus.   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. </p>
        </Container>
        <br></br>
        <Container textAlign="center">
        <Button color="teal"><Icon name="plus"/>Tambahkan Tautan List</Button>
        </Container>
        
      </div>
    );
  }
}

export default App;
