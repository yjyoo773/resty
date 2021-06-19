import React from "react";
import useForm from "../../hooks/form.js";
import "./_formquery.scss";

function FormQuery(props) {
  const [handleChange] = useForm(props.handleChange);
  return (
    <div>
      <input
        type="text"
        name = "queryParam"
        placeholder="query parameter"
        onChange={handleChange}
      />
      <input
        type="text"
        name = "queryVal"
        placeholder="value"
        onChange={handleChange}
      />
    </div>
  );
}

// class FormQuery extends React.Component {
//   handleQueryChange = (e) => {
//     let query = e.target.value;
//     this.props.handleQuery(query);
//   };

//   handleValueChange = (e) => {
//     let value = e.target.value;
//     this.props.handleValue(value);
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="query parameter"
//           onChange={this.handleQueryChange}
//         />
//         <input
//           type="text"
//           placeholder="value"
//           onChange={this.handleValueChange}
//         />
//       </div>
//     );
//   }
// }
export default FormQuery;
