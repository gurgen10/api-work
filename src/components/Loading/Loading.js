import React, { Component } from 'react';
import { Spinner, Jumbotron } from 'react-bootstrap';

class Loading extends Component {

  render() {
    return (
      <Jumbotron style={{textAlign: 'center'}}>
        <div >
         <Spinner  animation="border" role="status" variant="primary">
          <span   className="sr-only">Loading...</span>
        </Spinner>
        </div>
      </Jumbotron>

    );
  }
}

export default Loading;