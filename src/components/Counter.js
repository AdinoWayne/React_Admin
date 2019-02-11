import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from 'antd';

 class Counter extends Component {
  render() {

    const { count } = this.props;

    return (
      <div className="counter">
        <h1>This is test!</h1>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>        
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;
