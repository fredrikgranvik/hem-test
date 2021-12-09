import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const SearchWidget = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SearchArea = css`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const searchForm = css`
  position: relative;
  width: 42vw;
`;
export const SearchInput = css`
  width: 42vw;
  padding: 1.6rem;
  font-size: 1vw;
  border-radius: 40px;
  box-shadow: 0 0 0 15px rgb(0 0 0 / 30%);
  border: none;
  position: absolute;
`;
export const YearInput = css`
  width: 5vw;
  padding: 1.6rem;
  font-size: 1vw;
  border: none;
  position: absolute;
  right: 70px;
  border-left: 1px solid #ccc;
  background: none;
`;
export const SubmitSearch = css`
  position: absolute;
  right: 10px;
  border: none;
  background: none;
  padding: 15px;

  svg {
    width: 40px;
    fill: #ccc;
  }
`;
export const searchResult = css`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 52px;

  h2 {
    flex: 0 0 100%;
    padding: 20px 50px;
    border-bottom: 2px solid #ccc;
    margin: 0;
  }
`;

export const pagination = css`
  background-color: aliceblue;
  flex: 0 0 100%;
  padding: 20px 50px;
  border-bottom: 2px solid #ccc;
  margin: 0;
`;
export const page = css`
  background-color: #f00;
`;
export const SearchItem = styled.div`
  background-color: #eee;
  flex: 1 1 15%;
  margin: 10px;
  flex-direction: column;
  display: flex;
  flex-grow: 0;
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  padding: 0 32px;
`;

export const Year = styled.p`
  padding: 0 32px;
`;
