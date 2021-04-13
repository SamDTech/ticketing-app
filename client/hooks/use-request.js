import axios from "axios";
import { useState } from "react";

const UseRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const { data } = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(data);
      }

      return data;
    } catch (err) {
      console.log(err);
      setErrors(
        <div className="alert alert-danger">
          <h4>Oops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => {
              return <li key={err.message}> {err.message}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default UseRequest;
