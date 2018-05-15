import styled from 'styled-components';
import Theme from '../Theme'

export const StyledCommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 60px;
  flex-grow: 1;
  width: 100%;

  li.item--list ul {
    margin-top: 16px;
  }

  li.item--list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;

    img {
      min-width: 80px!important;
      max-width: 80px!important;
    }

    &:last-child div.item--list--wrapper {
      border-bottom: 0;
    }

    div.item--list--wrapper {
      margin-left: 16px;
      width: 100%;

      h2.item--list--wrapper--title {
        margin-bottom: 16px;
        margin-top: 0;
      }

      p.item--list--wrapper--text {
        color: ${Theme.colors.text[300]};
        font-size: 16px;
      }

      .item--list--comment--actions {
        padding-bottom: 16px;
        border-top: 1px solid ${Theme.colors.elements[500]};
      }

    }
  }
`
