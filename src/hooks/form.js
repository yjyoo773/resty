import { useState } from "react";

const useForm = (action) => {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      console.log("e.target.resetgu")
      e.target.reset();
    }
    action(values);
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return [handleSubmit, handleChange];
};
export default useForm;
