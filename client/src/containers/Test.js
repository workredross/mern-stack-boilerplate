import React, { Component } from "react";
import { connect } from "react-redux";
import { testBackEnd } from "../actions";

class Test extends Component {
  componentDidMount() {
    this.props.testBackEnd();
  }
  render() {
    return (
      <div>
        <h2>Backend Working:{this.props.testBackend.data}</h2>
        <h2>Redux Working</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testBackend: state.testBackEnd
  };
};

export default connect(mapStateToProps, { testBackEnd })(Test);
