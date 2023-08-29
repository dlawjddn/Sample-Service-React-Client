import styled from "@emotion/styled";
import { useState } from "react";
import { apiClient } from "../apis/apis";

const Input = styled.input`
  width: 85%;
  padding: 10px;
  margin: 10px 0 10px 0;
  height: 40px;
  background: whitesmoke;
  border: none;
  border-bottom: 2px solid black;
`;

export const NewSchedule = ({ onScheduleCreated }) => {
  const [content, setContent] = useState("");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="새로운 스케줄을 입력해주세요"
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};
