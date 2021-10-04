import { useContext } from "react";
import "./formbody.scss";
import { SettingContext } from "../../context/settings.js";

const FormBody = () => {

  const settingContext = useContext(SettingContext);

  let changeBody = (e) => {
    settingContext.changeBody(e.target.value);
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

export default FormBody;
