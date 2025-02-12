import styled from "styled-components";
import { colorProgress } from "../../../help/colorProgress";
import { SearchProcent } from "../../../help/searchProcent";

export const Progress = styled.progress`
  appearance: none;
  -webkit-appearance: none;
  width: 200px;
  height: 10px;
  border: none;
  border-radius: 10px;
  background-color: #e6e6e6;
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: #e6e6e6;
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background: ${({ startSteps, steps }) => colorProgress(SearchProcent(startSteps, steps))};
    border-radius: 10px;
    transition:all 0.3s ease;
  }

  &::-moz-progress-bar {
    background: linear-gradient(90deg, #ff4d4d, #ff8080);
    border-radius: 10px;
    transition: width 0.3s ease;
  }
`;
