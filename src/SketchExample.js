import React, { Component } from "react";
import { SketchPicker } from "react-color";
import "./SketchExample.css";
import PropTypes from "prop-types";
class SketchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      background: this.props.background
    };
  }

  handleChange = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker
    });
  };

  handleChangeComplete = color => {
    this.props.changeComplete(color);
  };

  render() {
    const bgcolor = {
      background: `${this.props.background}`
    };
    return (
      <div className="color-picker-container">
        <button
          type="button"
          className="color-picker"
          onClick={this.handleChange}
          style={bgcolor}
        ></button>
        {this.state.displayColorPicker && (
          <SketchPicker
            className="sketch-picker"
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
          />
        )}
      </div>
    );
  }
}

SketchExample.propTypes = {
  background: PropTypes.string,
  changeComplete: PropTypes.func
};

SketchExample.defaultProps = {
  background: "",
  changeComplete: () => {}
};

export default SketchExample;
