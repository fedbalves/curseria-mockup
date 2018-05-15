import styled from 'styled-components';
import Theme from '../Theme';

export const StyleClassItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid ${Theme.colors.elements[500]};
  margin-bottom: 16px;
  padding-bottom: 16px;
  position: relative;

  .item--list--play.insider {
    display: none!important;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    order: 1;
    min-width: auto;
    max-width: auto;
    height: auto;
  }

  .item--module--name + .item--list--wrapper--title {
    margin-top: 70px!important;
  }

  @media only screen and (max-width : 768px) {
    flex-direction: column;

    span.item--list--order {
      font-size: 90px!important;
      line-height: 1.50!important;
    }

    .item--list--wrapper {
      margin-left: 0!important;
    }

    h2.item--list--wrapper--title {
      margin-top: 0!important;
    }

    .item--list--play.outsider {
      display: none!important;
    }

    .item--list--play.insider {
      display: flex!important;
    }

    .info--paragraph {
      span {
        line-height: 0!important;
        letter-spacing: 0!important;
      }

      b {
        display: block!important;
        line-height: initial!important;
        margin-left: 0!important;
        letter-spacing: 0!important;
      }
    }

    .item--list--wrapper--detail--info > div {
      order: 2;
      flex-grow: 1;
    }

    .info--detail--courseStatus {
      line-height: initial!important;
    }
  }

  &:last-child {
    border-bottom: 0;
  }

  span.item--list--order {
    font-size: 72px;
    font-weight: 500;
    line-height: 2.84;
    text-align: left;
    color: ${Theme.colors.elements[400]};
    font-family: 'san_francisco_textmedium';
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: space-between;
    max-width: 122px;

    &:after {
      content: '_';
      position: relative;
      width: 30px;
      margin: 0 8px;
      bottom: 10px;
      color: ${Theme.colors.elements[500]};
    }
  }

  div.item--list--play {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    max-width: 200px;
    width: auto;
    height: 200px;
    margin-top: 131px;
  }

  div.item--list--wrapper {
    margin-left: 12px;
    flex-grow: 2;

    h2.item--list--wrapper--title {
      margin: 0;
      margin-top: 102px;
      font-family: 'san_francisco_textsemibold';
      font-size: 26px;
      font-weight: 600;
      line-height: 1.23;
      letter-spacing: 1.3px;
      text-align: left;
      * {
        color: ${Theme.colors.text[100]}!important;
      }
    }

    p.item--list--wrapper--text {
      color: ${Theme.colors.text[300]};
      font-family: 'san_francisco_textregular';
      font-size: 16px;
      line-height: 1.31;
      letter-spacing: 0.8px;
      text-align: left;
    }

    div.item--list--wrapper--detail {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 24px 0;

      .item--list--wrapper--detail--info {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        align-items: center;

        .info--detail--courseStatus {
          font-family: san_francisco_textheavy;
          font-size: 32px;
          font-weight: 900;
          line-height: 2.33;
          text-align: left;
          color: ${Theme.colors.action.red};
          align-self: center;
        }

        .info--paragraph {
          color: ${Theme.colors.text[300]};
          font-size: 12px;
          font-family: 'san_francisco_textbold';

          span,
          b {
            font-size: 11.3px;
            font-weight: bold;
            line-height: 2.84;
            letter-spacing: 2.3px;
            text-align: left;
            text-transform: uppercase;
          }

          span:first-child:after {
            display: inline-block;
            margin: 0 6px;
            content: '•';
          }

          b {
            color: ${Theme.colors.action.red};
            margin-left: 12px;
          }
        }
      }
    }
`;
