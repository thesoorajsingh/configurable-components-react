import React from "react";
import "./styles.css";

const EditableForm = ({ config }) => {
  const { formMeta, formInputs, formConfig } = config;
  return (
    <div className="card">
      <form className="form" onSubmit={formMeta.onSubmit}>
        {Object.keys(formInputs).map((item, index) => {
          console.log(formInputs[item]);
          return (
            <>
              <p>{item}</p>
              <input className="input" {...formInputs[item]} />
            </>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditableForm;
