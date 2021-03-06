import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  console.log(otherProps.value);
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          htmlFor="group"
          className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
