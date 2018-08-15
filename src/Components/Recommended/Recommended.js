import styled from "styled-components";
import recPic from "../../images/restaurant.jpg";

export const RecommendedCarrier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TitleCarrier = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgb(34, 34, 34);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RecommendedTitle = styled.div`
  font-size: 3em;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: white;
`;
export const ListCarrier = styled.div`
  width: auto;
  height: auto;
  padding-top: 30px;
  padding-left: 55px;
  padding-right: 30px;
  padding-bottom: 30px;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  grid: auto-flow / repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;
export const RecImage = styled.div`
  width: auto;
  height: 300px;

  &.pageBreak {
    background-image: url(${recPic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-attachment: fixed;
  }
`;
