import axios from "axios";
import { useState } from "react";

const UseRequest = ({ url, method, body }) => {
  const [errors, setErrors] = useState([]);

  const doRequest = async () => {
    try {
      const { data } = await axios[method](url, body);

      return data;
    } catch (error) {
        setErrors(
          <div className="alert alert-danger">
            <h4>Oops...</h4>
            <ul className="my-0">
              {error.response.data.errors.map((err) => {
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
