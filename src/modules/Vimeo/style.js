import styled from 'styled-components';
import Theme from '../Theme';

export const StyledVimeo = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;

  textarea {
    color: #fff!important;
  }

  .notes--delete--button {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;

    }
  }

  @media only screen and (max-width : 768px) {
    .video--overlay--bookmarks {
      position: relative!important;
      width: calc(100% - 16px)!important;
      padding: 8px!important;
    }
    .video--overlay--bookmarks--button {
      top: 5px!important;
      right: 5px!important;
    }
    .video--overlay--bookmarks {
      background-color: transparent!important;
      margin: 30px 0!important;
    }
  }

  .video--overlay--bookmarks--button {
    position: absolute;
    top: 25px;
    right: 15px;
  }

  .float--button--notes {
    position: absolute;
    top: 5px;
    right: 5px;
    * {
      color: #fff!important;
    }
  }

  .video--overlay--bookmarks {
    position: absolute;
    top: 15px;
    right: 0;
    width: 40%;
    height: 85%;
    background-color: ${Theme.colors.elements[500]};
    padding: 30px;

    > h3 {
      font-family: san_francisco_textsemibold;
      font-size: 26px;
      font-weight: 600;
      line-height: 0.81;
      letter-spacing: 1.3px;
      text-align: left;
      margin: 0;

      &:after {
        width: 40px;
        height: 5px;
        content: '';
        display: block;
        background-color: ${Theme.colors.elements[600]};
        margin: 14px 0;
      }
    }

    .video--overlay--bookmarks--list {
      display: flex;
      flex-direction: column;

      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      max-height: 90%;

      li {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        align-items: center;
        margin-bottom: 10px;

        span {
          color: ${Theme.colors.action.yellow};
          font-family: san_francisco_textbold;
          font-size: 14px;
          font-weight: bold;
          line-height: 1.5;
          letter-spacing: 0.7px;
          text-align: left;
          margin-right: 23px;
        }

        div {
          font-family: san_francisco_textmedium;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.75;
          letter-spacing: 0.6px;
          text-align: left;
          color: ${Theme.colors.text[200]};
          flex-grow: 1;
          position: relative;
        }
      }
    }
  }
`
