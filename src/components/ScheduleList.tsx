import { apiClient } from "../apis/apis";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <div>
      <ul>
        {scheduleData.map((schedule, index) => (
          <li key={index}>{schedule.title}</li>
        ))}
      </ul>
    </div>
  );
};
