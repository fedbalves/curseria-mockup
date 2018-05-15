import styled from 'styled-components';
import Theme from '../Theme';

export const StyledEvaluate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  p {
    text-transform: uppercase;
    color: ${Theme.colors.text[300]};
    font-size: 14px;
    font-family: 'san_francisco_textbold';
    margin-right: 16px;
  }

  .evaluate-by-stars * {
    fill: ${Theme.colors.action.yellow};
  }

  .evaluation {
    color: ${Theme.colors.action.yellow};
    border-radius: 50%;
    border: 2px solid ${Theme.colors.action.yellow};
    width: 50px;
    height: 50px;
    margin-left: 16px;
    line-height: 50px;
    text-align: center;
    font-family: 'san_francisco_textheavy';
  }

  @media only screen and (max-width : 768px) {
    p {
      font-size: 12px!important;
      margin-right: 8px!important;
    }
    .evaluation {
      margin-left: 4px!important;
    }
    .evaluate-by-stars--button {
      padding: 4px!important;
      width: 22px!important;
      height: 22px!important;
    }
  }
`
