import { useContext } from "react";
import axios from "axios";
import { SettingContext } from "../../context/settings.js";
import FormBody from "../formbody";
import FormQuery from "../formquery";
import "./form.scss";

const Form = () => {
  const context = useContext(SettingContext);

  let handleGo = async (e) => {
    e.preventDefault();
    let history = context.history;
    let newHist = {
      rest: context.rest,
      url: context.url,
      body: context.body,
      query: context.query,
      value: context.value,
    };
    history.push(newHist);
    if (!localStorage.getItem(`${context.rest}-${context.url}`)) {
      localStorage.setItem(
        `${context.rest}-${context.url}`,
        JSON.stringify(newHist)
      );
    }
    context.changeHistory(history);  // newly added
    try {
      let data;
      let results = [];
      context.changeLoading(!context.loading);
      if (context.rest === "get") {
        if (context.query && context.value) {
          let url = `${context.url}?${context.query}=${context.value}`;
          context.changeUrl(url);
        }
        data = await axios.get(context.url);
      }
      if (context.rest === "post") {
        data = await axios.post(context.url, JSON.parse(context.body));
      }
      if (context.rest === "put") {
        data = await axios.put(context.url, JSON.parse(context.body));
      }
      if (context.rest === "delete") {
        data = await axios.delete(context.url);
      }
      let header = data.headers;
      let body = data.data;
      console.log("header",header);
      console.log("body",body);
      results.push(header);
      results.push(body);
      setTimeout(() => {
        context.changeResult(results);
        context.changeHistory(history);
        context.changeLoading(!context.loading);
      }, 1000);
    } catch (e) {
      setTimeout(() => {
        context.changeLoading(!context.loading);
      }, 1000);
    }
  };

  return (
    <>
      <h3>
        URL: &nbsp;
        <input
          type="text"
          onChange={(e) => context.changeUrl(e.target.value)}
        />
        <button onClick={handleGo}>GO</button>
      </h3>
      <button onClick={(e) => context.changeRest(e.target.value)} value="get">
        GET
      </button>
      <button onClick={(e) => context.changeRest(e.target.value)} value="post">
        POST
      </button>
      <button onClick={(e) => context.changeRest(e.target.value)} value="put">
        PUT
      </button>
      <button
        onClick={(e) => context.changeRest(e.target.value)}
        value="delete"
      >
        DELETE
      </button>
      {context.rest === "get" ? <FormQuery /> : <FormBody />}
    </>
  );
};

export default Form;
