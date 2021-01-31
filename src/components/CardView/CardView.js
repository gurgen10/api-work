import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { updateProsCons, 
  updatePros, 
  updateCons, 
  addCons, 
  addPros, 
  deletePros, 
  deleteCons } from '../../redux/Actions/prosConsActions';

import { Card, ListGroup } from 'react-bootstrap';
import DataListItem from '../DataListItem';
import AddItem from '../AddItem';
import './CardView.css';

class CardView extends Component {
  createObj = function()  {
    const { data, pros, cons, type } = this.props;

    const obj = {}
    if(type === "pron") {
      obj.pros = data;
      obj.cons = cons;
      // obj.pros = ["random pros 1", "random pros 2", "random pros 3", "random pros 4"];
      // obj.cons = ["random cons 1", "random cons 2", "random cons 3", "random cons 4"];

    } else {
      obj.pros = pros;
      obj.cons = data
    }
    return obj
  }
  deleteHandler= (idx) => {

    const { data, title, deletePros, deleteCons, updateProsCons } = this.props;
    data.splice(idx, 1);
    (title === "Pron's") ? deletePros(data) : deleteCons(data);
    updateProsCons()

  }

  updateHandler = (idx, text) =>  {
    const { title, data, updatePros, updateCons, updateProsCons} = this.props;
    data[idx] = text;
    (title === "Pron's") ? updatePros(data) : updateCons(data);
    updateProsCons()

  }
  addItemHandler = (text, title) => {
    const { addCons, addPros, updateProsCons } = this.props;

    (title === "Pron's") ? addPros(text) : addCons(text)
    updateProsCons()
  }


  render() {
    let { title, data } = this.props
    // data = ["random reason 1", "random reason 2", "random reason 3", "random reason 4"]

    const prosList = data.map((p, index) =>
      <DataListItem 
        key={index.toString()} 
        data={p} 
        index={index} 
        deleteHandler={this.deleteHandler}
        updateHandler={this.updateHandler} />
    );
    
    return (
      <Card>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Body>
          <ListGroup>
            {prosList}
          </ListGroup>
        </Card.Body>

        <Card.Footer>
         <AddItem addItem={this.addItemHandler} title={title}/>
        </Card.Footer>
      </Card>
    )

  }
}
CardView.propTypes = {
  title: PropTypes.string,
  pros: PropTypes.array, 
  cons: PropTypes.array
}

const mapStateToProps = state => {
  return {
    groupId: state.authReducer.groupId,
    userId: state.authReducer.userId,
    pros: state.prosConsReducer.pros,
    cons: state.prosConsReducer.cons,
  };
};

const dispatchPropsToState = (dispatch) => {
  return { ...bindActionCreators({ 
    updateProsCons, 
    updatePros, 
    updateCons, 
    addCons, 
    addPros,
    deletePros, 
    deleteCons }, dispatch) };
};

export default connect(mapStateToProps, dispatchPropsToState)(CardView);