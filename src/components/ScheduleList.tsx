import React, { useState, useEffect } from "react";
import { apiClient } from "../apis/apis";
import styled from "@emotion/styled";

const Input = styled.input`
  width: 70%;
  height: 40px;
  background: whitesmoke;
  border: none;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

const Div = styled.div`
  width: 85%;
  height: 40px;
  background: whitesmoke;
  border: none;
  border-bottom: 2px solid black;
  padding-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background: whitesmoke;
  border-radius: 10px;
  height: 20px;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
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
      <ul>
        {scheduleData.map((schedule) => (
          <Div key={schedule.id}>
            {editingId === schedule.id ? (
              <Container>
                <Input
                  type="text"
                  value={schedule.content}
                  onChange={(event) => handleEditChange(event, schedule.id)}
                />
                <Button onClick={() => handleSaveEdit(schedule.id)}>
                  Save
                </Button>
              </Container>
            ) : (
              <div>
                <span>{schedule.content}</span>
                <Button onClick={() => handleEditClick(schedule.id)}>
                  Edit
                </Button>
                <Button onClick={() => handleDelete(schedule.id)}>X</Button>
              </div>
            )}
          </Div>
        ))}
      </ul>
    </Container>
  );
};
