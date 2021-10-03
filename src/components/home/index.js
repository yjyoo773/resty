import React, { useContext } from "react";
import { SettingContext } from "../../context/settings.js";

// import Form from "../form"
import Form from "../form/form.js";

import History from "../history";
import Results from "../results";
import { Roller } from "react-awesome-spinners";

function Home() {
  const context = useContext(SettingContext);
  return (
    <>
      <Form />
      <div
        className="histults"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyItems: "center",
        }}
      >
        <History />
        {context.result.length > 0 ? <Results /> : null}
      </div>
    </>
  );
}

export default Home;
