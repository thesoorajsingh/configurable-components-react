import EditableForm from "./EditableForm";
import "./styles.css";

export default function App() {
  const config = {
    formMeta: {
      formName: "personal",
      onSubmit: (e) => {
        e.preventDefault();
        console.log(e.target);
      }
    },
    formInputs: {
      Name: {
        type: "text",
        minLength: 2,
        maxLength: 50,
        onClick: () => {
          console.log("you clicked the name field");
        }
      },
      Email: {
        type: "email",
        onChange: (e) => {
          console.log(e.target.value);
        }
      },
      Phone: {
        type: "number",
        onChange: (e) => {
          console.log(e.target.value);
        }
      }
    },
    formConfig: {
      editable: false
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <EditableForm config={config} />
    </div>
  );
}
