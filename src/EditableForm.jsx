import React, { useState } from "react";
import "./styles.css";

const EditableForm = ({ config }) => {
  const { formMeta, formInputs, formConfig } = config;
  const [formData, setFormData] = useState({});
  
  const InputField = ({formMeta, formData, formInputs, item, index}) => {
    const [editable, setEditable] = useState(false)
    return <div className="inputField">
              <p>{item}</p>
              <input
                className="input"
                value={formData[item]}
                disabled={editable}
                onChange={(e) =>
                  setFormData(...formData, `${item}: e.target.value`)
                }
                {...formInputs[item]}
              />
              <i className='fa-solid fa-pencil' onClick={()=>{setEditable(!editable)}} />
            </div>
  }
  
  return (
    <div className="card">
      <form className="form" onSubmit={formMeta.onSubmit}>
        {Object.keys(formInputs).map((item, index) => {
          return (
            <InputField formData={formData} formInputs={formInputs} formMeta={formMeta} item={item} index={index}/>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditableForm;
