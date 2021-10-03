import React, { useContext } from "react";
import useForm from "../../hooks/form.js";
import { SettingContext } from "../../context/settings.js";

import "./_formquery.scss";

const FormQuery = (props) => {
  const [handleSubmit, handleChange] = useForm(props.handleSubmit);
  const settingContext = useContext(SettingContext);

  let changeParam = (e) => {
    handleChange();
    settingContext.changeQuery(e.target.value);
  };

  let changeValue = (e) => {
    handleChange();
    settingContext.changeValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="queryParam"
        placeholder="query parameter"
        onChange={changeParam}
      />
      <input
        type="text"
        name="queryVal"
        placeholder="value"
        onChange={changeValue}
      />
    </div>
  );
};

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
