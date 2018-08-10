import styled from "styled-components";

export const RecCard = styled.div`
  width: 260px;
  height: 260px;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 15px;

  &.recCardHover:hover {
    background-color: rgb(255, 204, 128);
    box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
  }
`;
export const RecName = styled.div`
  font-size: 2em;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  line-height: 35px;
  text-align: left;
`;
export const RecAddress = styled.div`
  font-size: 0.8em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: left;
`;
export const RecRating = styled.div`
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  text-align: left;
`;
export const RecChat = styled.button`
  border-radius: 4px;
  background-color: #1ed4f4;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 2px;
  outline: none;
`;
export const RecFavorite = styled.button`
  border-radius: 4px;
  background-color: #1ed4f4;
  border: none;
  color: white;
  padding: 7px 18px;
  text-align: center;
  font-size: 12px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  outline: none;
`;
