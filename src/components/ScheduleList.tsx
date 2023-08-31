import { useState, useEffect } from "react";
import { apiClient } from "../apis/apis";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 76%;
  height: 40px;
  background: whitesmoke;
  border: none;
  margin-bottom: 2px;
`;

const Div = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: whitesmoke;
  border: none;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  font-size: 20px;
  overflow: hidden;
`;

const Button = styled.button`
  background: whitesmoke;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 5px;
`;

export const ScheduleList = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const getSchedule = async () => {
    try {
      const response = await apiClient.get("/schedule");
      setScheduleData(response.data);
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/schedule/${id}`);
      setScheduleData((prevScheduleData) =>
        prevScheduleData.filter((schedule) => schedule.id !== id)
      );
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleEditChange = (event, id) => {
    const updatedScheduleData = scheduleData.map((schedule) =>
      schedule.id === id
        ? { ...schedule, content: event.target.value }
        : schedule
    );
    setScheduleData(updatedScheduleData);
  };

  const handleSaveEdit = async (id) => {
    try {
      const scheduleToUpdate = scheduleData.find(
        (schedule) => schedule.id === id
      );

      await apiClient.patch(`/schedule/${id}`, {
        content: scheduleToUpdate.content,
      });

      setEditingId(null);
    } catch (error) {
      console.error("Error updating schedule:", error);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <Container>
      {scheduleData.map((schedule) => (
        <Div key={schedule.id}>
          {editingId === schedule.id ? (
            <div>
              <Input
                type="text"
                value={schedule.content}
                onChange={(event) => handleEditChange(event, schedule.id)}
              />
              <Button onClick={() => handleSaveEdit(schedule.id)}>Save</Button>
            </div>
          ) : (
            <div>
              <span>{schedule.content}</span>
              <Button onClick={() => handleEditClick(schedule.id)}>✎</Button>
              <Button onClick={() => handleDelete(schedule.id)}>X</Button>
            </div>
          )}
        </Div>
      ))}
    </Container>
  );
};
