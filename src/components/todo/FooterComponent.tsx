import { useContext } from "react";
import { AuthContext } from "./security/AuthContext";

function FooterComponent(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">Your Footer</div>
    </footer>
  );
}

export default FooterComponent;
