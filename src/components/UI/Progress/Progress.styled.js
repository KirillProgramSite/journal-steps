import styled from "styled-components";
import { colorProgress } from "../../../help/colorProgress";
import { SearchProcent } from "../../../help/searchProcent";

export const Progress = styled.progress`
  appearance: none; /* Убираем стандартные стили браузера */
  -webkit-appearance: none;
  width: 200px;
  height: 10px;
  border: none;
  border-radius: 10px;
  background-color: #e6e6e6; /* Цвет фона */
  overflow: hidden;

  &::-webkit-progress-bar {
    background-color: #e6e6e6; /* Фон */
    border-radius: 10px; /* Скругленные края */
  }

  &::-webkit-progress-value {
    background: ${({ startSteps, steps }) => colorProgress(SearchProcent(startSteps, steps))};
    border-radius: 10px; /* Скругленные края заполненной части */
    transition:all 0.3s ease; /* Плавное изменение заполнения */
  }

  &::-moz-progress-bar {
    background: linear-gradient(90deg, #ff4d4d, #ff8080); /* Для Firefox */
    border-radius: 10px;
    transition: width 0.3s ease;
  }
`;
