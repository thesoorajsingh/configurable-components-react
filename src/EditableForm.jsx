import React from "react";
import { useState } from "react/cjs/react.production.min";
import "./styles.css";

const EditableForm = ({ config }) => {
  const { formMeta, formInputs, formConfig } = config;
  const [formData, setFormData] = useState({});
  return (
    <div className="card">
      <form className="form" onSubmit={formMeta.onSubmit}>
        {Object.keys(formInputs).map((item, index) => {
          console.log(formInputs[item]);
          return (
            <>
              <p>{item}</p>
              <input
                className="input"
                value={formData[item]}
                onChange={(e) =>
                  setFormData(...formData, `${item}: e.target.value`)
                }
                {...formInputs[item]}
              />
            </>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditableForm;
