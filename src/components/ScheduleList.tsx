import React from "react";
import { apiClient } from "../apis/apis";

export const ScheduleList = () => {
  const [scheduleData, setScheduleData] = React.useState([]);

  const getSchedule = async () => {
    try {
      const response = await apiClient.get("/schedule");
      console.log(response.data);
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

  React.useEffect(() => {
    getSchedule();
  }, []);

  return (
    <div>
      <ul>
        {scheduleData.map((schedule) => (
          <li key={schedule.id}>
            <span>{schedule.content}</span>
            <button onClick={() => handleDelete(schedule.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
