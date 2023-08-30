import "./App.css";
import styled from "@emotion/styled";
import { ScheduleList } from "./components/ScheduleList";
import { useState } from "react";
import { apiClient } from "./apis/apis"; 

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

const Input = styled.input`
  width: 85%;
  padding: 10px;
  margin: 10px 0 10px 0;
  height: 40px;
  background: whitesmoke;
  border: none;
  border-bottom: 2px solid black;
`;

function App() {
  const [newSchedules, setNewSchedules] = useState([]);

  const addNewSchedule = () => {
    setNewSchedules([...newSchedules, ""]);
  };

  const handleScheduleChange = (index, value) => {
    const updatedSchedules = [...newSchedules];
    updatedSchedules[index] = value;
    setNewSchedules(updatedSchedules);
  };

  const handleSaveClick = async () => {
    const scheduleContents = newSchedules.filter((schedule) => schedule.trim() !== "");

    const requests = scheduleContents.map((content) => apiClient.post("/schedule", { content }));

    await Promise.all(requests);
  };

  return (
    <div className="App">
      <MainDiv>
        <TextBox> Schedule </TextBox>
        <button
          style={{ width: "90%", marginTop: "20px", borderRadius: "5px" }}
          onClick={addNewSchedule}
        >
          {"Add"}
        </button>
        {newSchedules.map((schedule, index) => (
          <Input
            key={index}
            type="text"
            placeholder="새로운 스케줄을 입력해주세요"
            value={schedule}
            onChange={(event) => handleScheduleChange(index, event.target.value)}
          />
        ))}
        <div>
          <ScheduleList />
        </div>
        <button
          style={{ width: "40%", marginTop: "20px", borderRadius: "5px", marginRight: "20px" }}
          onClick={handleSaveClick} // Call handleSaveClick function on click
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
