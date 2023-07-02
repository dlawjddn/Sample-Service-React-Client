import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function WelcomeComponent(): JSX.Element {
  const { username } = useParams();
  const authContext = useAuth();
  const [message, setMessage] = useState<string | null>(null);

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
    </div>
  );
}

export default WelcomeComponent;
