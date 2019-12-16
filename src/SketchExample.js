import React, { Component } from "react";
import { SketchPicker } from "react-color";
import "./SketchExample.css";
class SketchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      background: this.props.background
    };
  }

  handleChange = color => {
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
export default SketchExample;
