import { useContext } from "react";
import { SettingContext } from "../../context/settings.js";

import "./_formquery.scss";

const FormQuery = () => {
  const settingContext = useContext(SettingContext);

  let changeParam = (e) => {
    settingContext.changeQuery(e.target.value);
  };

  let changeValue = (e) => {
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

export default FormQuery;
