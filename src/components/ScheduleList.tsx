import { useState, useEffect } from "react";
import { apiClient } from "../apis/apis";

export const ScheduleList = () => {
  const [scheduleData, setScheduleData] = useState([]);

  const getSchedule = async () => {
    try {
      const response = await apiClient.get("/schedule");
      console.log(response.data);
      setScheduleData(response.data);
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  };

  const handleDelete = async (scheduleId) => {
    try {
      await apiClient.delete(`/schedule/${scheduleId}`);
      // After successful deletion, update the scheduleData state
      setScheduleData(scheduleData.filter(schedule => schedule.scheduleId !== scheduleId));
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <div>
      <ul>
        {scheduleData.map((schedule, index) => (
          <li key={index}>
            {schedule.content}
            <button onClick={() => handleDelete(schedule.scheduleId)}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
