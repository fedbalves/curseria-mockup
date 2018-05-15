import styled from 'styled-components';
import Theme from '../Theme';

export const StyledMaterialList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 60px;
  flex-grow: 1;

  li.item--list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid ${Theme.colors.elements[500]};
    margin-bottom: 20px;
    padding-bottom: 20px;

    &:last-child {
      border-bottom: 0;
    }

    .item--list--image {
    }

    div.item--list--wrapper {
      margin-left: 16px;

      h2.item--list--wrapper--title {
        margin: 0;
        font-family: 'san_francisco_textsemibold';
        font-size: 26px;
        font-weight: 600;
        line-height: 1.23;
        letter-spacing: 1.3px;
        text-align: left;
      }

      p.item--list--wrapper--text {
        color: ${Theme.colors.text[300]};
        font-family: 'san_francisco_textregular';
        font-size: 16px;
        line-height: 1.31;
        letter-spacing: 0.8px;
        text-align: left;
      }
    }
  }
`
