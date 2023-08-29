import "./App.css";
import styled from "@emotion/styled";
import { useState } from "react";
import { NewSchedule } from "./components/NewSchedule";

const MainDiv = styled.div`
  width: 393px;
  height: 851px;
  background: whitesmoke;
  font-family: Montserrat;
`;

const TextBox = styled.div`
  width: 100%;
  font-size: 45px;
  text-align: center;
  padding-top: 20px;
`;

function App() {
  const [showNewSchedule, setShowNewSchedule] = useState(false);

  const toggleNewSchedule = () => {
    setShowNewSchedule(!showNewSchedule);
  };

  return (
    <div className="App">
      <MainDiv>
        <TextBox> Schedule </TextBox>
        <button
          style={{ width: "90%", marginTop: "20px", borderRadius: "5px" }}
          onClick={toggleNewSchedule}
        >
          {"Add"}
        </button>
        {showNewSchedule && <NewSchedule onScheduleCreated={undefined} />}
        <button
          style={{ width: "40%", marginTop: "20px", borderRadius: "5px", marginRight: "20px" }}
        >
          Save
        </button>
        <button
          style={{ width: "40%", marginTop: "20px", borderRadius: "5px" }}
        >
          Submit
        </button>
      </MainDiv>
    </div>
  );
}

export default App;
