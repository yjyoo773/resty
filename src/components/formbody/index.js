import React, { useContext } from "react";
import "./formbody.scss";
import useForm from "../../hooks/form.js";
import { SettingContext } from "../../context/settings.js";

const FormBody = (props) => {
  const [handleSubmit, handleChange] = useForm(props.handleSubmit);

  const settingContext = useContext(SettingContext);

  let changeBody = (e) => {
    handleChange();
    settingContext.changeBody(e.target.value);
    console.log("did the body update?", settingContext.body);
  };

  return (
    <div>
      <textarea
        type="text"
        name="formBody"
        placeholder="type body in JSON format"
        onChange={(e) => changeBody(e)}
      />
    </div>
  );
};

// class FormBody extends React.Component {
//   handleBodyChange = (e) => {
//     let body = e.target.value;
//     this.props.handleBody(body);
//   };

//   render() {
//     return (
//       <div>
//         <textarea type="text" placeholder="type body in JSON format" onChange={this.handleBodyChange} />
//       </div>
//     );
//   }
// }

export default FormBody;
