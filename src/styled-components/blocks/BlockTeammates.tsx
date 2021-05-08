import styled from 'styled-components';

export const BlockBlockTeammates = styled.div``;

export const BlockTeammatesTitle = styled.div`
  font-size: 32px;
  font-weight: ${(props) => `${props.theme.fontWeight.bolder}`};
  text-align: center;
  margin-bottom: 40px;
`;

export const BlockTeammatesSubTitle = styled.div`
  color: ${(props) => `${props.theme.colors.subtitlecolor}`};
  text-align: center;
  margin-bottom: 32px;
  font-size: 15px;
  margin-top: -36px;
`;

export const BlockTeammatesItem = styled.div`
  flex-shrink: 0;
  max-width: 240px;
  margin: 0 auto;
  background-color: ${(props) => `${props.theme.colors.white}`};
  box-shadow: 0 1px 3px ${(props) => `${props.theme.colors.shadowcolor}`};
`;

export const BlockmateInfo = styled.div`
  padding: 14px 16px 16px;
  text-align: center;
`;

export const BlockmatePosition = styled.div`
  font-size: 14px;
  color: ${(props) => `${props.theme.colors.subtitlecolor}`};
`;

export const BlockTeammatesList = styled.div`
  img {
    width: 100%;
  }

  .slick-list {
    margin: -10px;
    padding: 10px 0;
  }
  .slick-slide {
    padding: 0 10px;
  }
  .slick-slide,
  .slick-slide > div > div {
    &:focus {
      outline: none;
    }
  }

  .slick-dots {
    width: auto;
    position: static;
    padding: 0;
    font-size: 0;
    list-style: none;
    margin: 18px 0 0;
    text-align: center;

    li {
      display: inline-block;
      padding: 6px;
    }

    button {
      width: 10px;
      height: 10px;
      padding: 0;
      border: none;
      border-radius: 10px / 2;
      background: rgba(#000, 0.12);

      &:focus {
        outline: none;
      }

      &:hover {
        background: rgba(#000, 0.22);
      }
    }
    .slick-active button {
      background: #1e74df;
    }
  }
`;
