import React, { useState } from "react";
import "./styles.css";

const EditableForm = ({ config }) => {
  const { formMeta, formInputs, formConfig } = config;
  const [formData, setFormData] = useState({});
    const [wasFormEdited, setWasFormEdited] = useState(false)
  
  const InputField = ({formMeta, formData, formInputs, item, index}) => {
    const [editable, setEditable] = useState(true)
    return <div className="inputField">
              <p>{item}</p>
              <input
                className="input"
                value={formData[item]}
                disabled={editable}
                onChange={(e) =>{
                  setFormData(...formData, `${item}: ${e.target.value}`);
                  setWasFormEdited(true);
                  console.log(wasFormEdited)
                }}
                {...formInputs[item]}
              />
              <i className='fa-solid fa-pencil' style={{cursor: 'pointer'}} onClick={()=>{setEditable(!editable)}} />
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
        {wasFormEdited && 
        <button type="submit">Submit</button>
        }
      </form>
    </div>
  );
};

export default EditableForm;
