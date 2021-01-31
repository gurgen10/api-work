import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardGroup } from 'react-bootstrap';
import CardView from './components/CardView';
import Loading from './components/Loading';

import './App.css';

class App extends Component {
  
  /**
   * Rendering Items List
   * @returns {void}
   */
  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }
    if (this.props.isError) {
      return (<div>Something went wrong</div>);
    }
    const { pros, cons } = this.props;
    console.log('data', { pros, cons });

    return (
      <>
        <CardGroup>
          <CardView 
            title="Pron's" 
            data={pros}
             />
          <CardView 
            title="Con's" 
            data={cons} 
             />
        </CardGroup>
      </>
    );
  }

}

const mapStateToProps = state => {
  return {
    pros: state.prosConsReducer.pros,
    cons: state.prosConsReducer.cons,
    isError: state.commonReducer.isError,
    isLoading: state.commonReducer.isLoading,
  };
};

export default connect(mapStateToProps, null)(App);
