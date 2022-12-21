import EditableForm from "./EditableForm";
import "./styles.css";

export default function App() {
  const config = {
    formMeta: {
      formName: "personal",
      onSubmit: (e) => {
        e.preventDefault();
        console.log(formData);
      },
      defaultValues: {
        Name: "Sooraj",
        Email: "soorajsingh1999@gmail.com",
      },
      editable: false
    },
    formInputs: {
      Name: {
        type: "text",
        minLength: 2,
        maxLength: 50,
        onChange: (e) => {
          console.log(e.target.value);
        },
      },
      Email: {
        type: "email",
        onChange: (e) => {
          console.log(e.target.value);
        },
      },
      Phone: {
        type: "number",
        onChange: (e) => {
          console.log(e.target.value);
        },
      },
      Address: {
      },
      PAN: {
        
      }
    },
    formConfig: {
      editable: false,
    },
  };
  return (
    <div className="App">
      <h1>Configurable Form Component</h1>
      <h2>Start editing the config object and see some magic happen!</h2>
      <EditableForm config={config} />
    </div>
  );
}
