import React from "react";
import "./formbody.scss";
import useForm from "../../hooks/form.js";

function FormBody(props) {
  const [handleChange] = useForm(props.handleChange);
  return (
    <div>
      <textarea
        type="text"
        name="formBody"
        placeholder="type body in JSON format"
        onChange={handleChange}
      />
    </div>
  );
}

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
