import styled from "styled-components";
import { getAlertType, getListCSS  } from "./helpers";

export const Alert = styled.div`
  display: flex;
  padding: 15px;
  width: 99%;
  margin: 5px 5px 5px 5px;
  justify-content: space-between;
  margin-top: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  ${({ alertType }) => getAlertType(alertType)}
`;

export const CloseButton = styled.button`
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: var(--black);
  text-shadow: 0 1px 0 var(--white);
  opacity: 0.2;
  &:hover {
    color: var(--black;
    text-decoration: none;
    opacity: 0.5;
  }
`;
export const List = styled.li`
  margin-bottom: 5px;
  list-style-type: ${({ listStyle }) => getListCSS(listStyle)};
`;
export const Messages = styled.ul`
  display: flex;
  flex-direction: column;
`;

