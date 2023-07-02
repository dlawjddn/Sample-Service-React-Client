import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

function WelcomeComponent(): JSX.Element {
  const { username } = useParams();
  const authContext = useAuth();
  const [message, setMessage] = useState<string | null>(null);

  function callHelloWorldRestApi() {
    console.log("called");

    retrieveHelloWorldPathVariable(username, authContext?.token)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));
  }

  function successfulResponse(response: any) {
    console.log(response);
    setMessage(response.data.message);
  }

  function errorResponse(error: any) {
    console.log(error);
  }

  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
          Test Hello World API
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

export default WelcomeComponent;
