import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./SketchExample.css";
import PropTypes from "prop-types";

const SketchExample = props => {
  const [showPicker, setPickerState] = useState(false);

  const bgcolor = {
    background: `${props.background}`
  };

  const handleChange = () => {
    setPickerState(!showPicker);
  };

  const handleChangeComplete = color => {
    props.changeComplete(color);
  };

  return (
    <div className="color-picker-container">
      <button
        type="button"
        className="color-picker"
        onClick={handleChange}
        style={bgcolor}
      ></button>
      {showPicker && (
        <SketchPicker
          className="sketch-picker"
          color={props.background}
          onChangeComplete={handleChangeComplete}
        />
      )}
    </div>
  );
};

SketchExample.propTypes = {
  background: PropTypes.string,
  changeComplete: PropTypes.func
};

SketchExample.defaultProps = {
  background: "",
  changeComplete: () => {}
};

export default SketchExample;
