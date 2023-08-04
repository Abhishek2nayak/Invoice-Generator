import React from "react";

const FormControl = ({
  type = "text",
  value,
  name ,
  onChange,
  label,
  placeholder = "",
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      <span className="label-text p-1">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered input-sm   w-full max-w-xs"
        value={value}
        onChange={onChange}
        name = {name}
      />
    </div>
  );
};

export default FormControl;
