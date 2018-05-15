import styled from 'styled-components';
import List, { ListItem } from 'material-ui/List';
import Theme from '../Theme';

export const StyleMenu = styled.div``;

export const StyleList = styled(List)`
  display: flex;
  flex-direction: row;
`;

export const StyleListItem = styled(ListItem)`
  * {
    color: ${Theme.colors.text[200]};
    font-family: 'san_francisco_textsemibold';
    line-height: 30px;
  }
  @media only screen and (max-width : 768px) {
    svg + div {
      display: none!important;
    }
  }
`;

export const StyledContent = styled.div`
  background-color: ${Theme.colors.elements[500]};
  margin: -24px -24px -40px;
  color: ${Theme.colors.text[200]};

  .delete--user--device {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .modal--user--close--type {
    position: absolute;
    top: 5px;
    right: 25px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .devices--list--user {
    list-style: none;
    padding: 0;

    li {
      margin: 8px 0;
    }
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-indent: 20px;
  }

  .formControl {
    display: block;
    align-self: flex-start;
    height: 35px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${Theme.colors.elements[300]};
    margin: 16px 0;

    input {
      border: none;
      background-color: transparent;
      font-family: san_francisco_textregular;
      height: 35px;
      width: calc(100% - 16px);
      font-size: 21px;
      line-height: 1.52;
      letter-spacing: 0.6px;
      text-align: left;
      padding: 0 8px;
      color: ${Theme.colors.elements[300]};
      &::placeholder {
        color: ${Theme.colors.elements[300]};
      }
    }
  }

  .modal--body--config {
    display: flex;
    position: relative;
    padding: 40px 20px;
    flex-direction: column;
  }

  .modal--body--config--footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (max-width : 768px) {
    header {
      align-items: left;
      flex-wrap: nowrap
      text-indent: 0px;
      font-size: 14px;
      padding-top: 20px;
    }

    .modal--user--close--type {
      position: absolute;
    }

    .formControl {
      height: 30px;
      margin: 11px 0;

      input {
        height: 30px;
        width: calc(100% - 16px);
        font-size: 16px;
        line-height: 1;
        letter-spacing: 0.3px;
        padding: 0 4px;
      }
    }
  }
`;
