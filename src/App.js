import './App.scss';
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  // State of your application
  state = {
    SPC: [],
    error: null,
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get('https://evening-reaches-94476.herokuapp.com/side-project-clubs');
      console.log(response);
      this.setState({ SPC: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };


  render() {

    const { error, SPC } = this.state;


    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
    <div id='App'>

       <h1 id="lolcat">Side project club records</h1>
      <container fluid>
         <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
            {this.state.SPC.map(SPC => (
                <Card style={{}} key={SPC.id} style={{ width: '27rem' }}>


                  <Card.Img variant="top" src={SPC.Image[0].url}/>
                  <Card.Body>
                    <Card.Title>{SPC.Name} - </Card.Title>

                    <Badge variant="secondary">{SPC.categories[0].Name}</Badge>
                    <Card.Text>
                      {SPC.Summary}
                    </Card.Text>
                    <Button variant="primary" target="_blank" href={SPC.url}>See the video</Button>
                  </Card.Body>
                </Card>
            )
            )}
            </CardDeck>
      </container>





    </div>
    );
  }
}

export default App;


